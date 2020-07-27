/// <reference path="../typings/PlayFab/PlayFabEconomyApi.d.ts" />

var PlayFab = typeof PlayFab != "undefined" ? PlayFab : {};

if(!PlayFab.settings) {
    PlayFab.settings = {
        titleId: null, // You must set this value for PlayFabSdk to work properly (Found in the Game Manager for your title, at the PlayFab Website)
        developerSecretKey: null, // For security reasons you must never expose this value to the client or players - You must set this value for Server-APIs to work properly (Found in the Game Manager for your title, at the PlayFab Website)
        advertisingIdType: null,
        advertisingIdValue: null,
        GlobalHeaderInjection: null,

        // disableAdvertising is provided for completeness, but changing it is not suggested
        // Disabling this may prevent your advertising-related PlayFab marketplace partners from working correctly
        disableAdvertising: false,
        AD_TYPE_IDFA: "Idfa",
        AD_TYPE_ANDROID_ID: "Adid"
    }
}

if(!PlayFab._internalSettings) {
    PlayFab._internalSettings = {
        entityToken: null,
        sdkVersion: "1.69.200713",
        requestGetParams: {
            sdk: "JavaScriptSDK-1.69.200713"
        },
        sessionTicket: null,
        verticalName: null, // The name of a customer vertical. This is only for customers running a private cluster. Generally you shouldn't touch this
        productionServerUrl: ".playfabapi.com",
        errorTitleId: "Must be have PlayFab.settings.titleId set to call this method",
        errorLoggedIn: "Must be logged in to call this method",
        errorEntityToken: "You must successfully call GetEntityToken before calling this",
        errorSecretKey: "Must have PlayFab.settings.developerSecretKey set to call this method",

        GetServerUrl: function () {
            if (!(PlayFab._internalSettings.productionServerUrl.substring(0, 4) === "http")) {
                if (PlayFab._internalSettings.verticalName) {
                    return "https://" + PlayFab._internalSettings.verticalName + PlayFab._internalSettings.productionServerUrl;
                } else {
                    return "https://" + PlayFab.settings.titleId + PlayFab._internalSettings.productionServerUrl;
                }
            } else {
                return PlayFab._internalSettings.productionServerUrl;
            }
        },

        InjectHeaders: function (xhr, headersObj) {
            if (!headersObj)
                return;

            for (var headerKey in headersObj)
            {
                try {
                    xhr.setRequestHeader(gHeaderKey, headersObj[headerKey]);
                } catch (e) {
                    console.log("Failed to append header: " + headerKey + " = " + headersObj[headerKey] + "Error: " + e);
                }
            }
        },

        ExecuteRequest: function (url, request, authkey, authValue, callback, customData, extraHeaders) {
            var resultPromise = new Promise(function (resolve, reject) {
                if (callback != null && typeof (callback) !== "function")
                    throw "Callback must be null or a function";

                if (request == null)
                    request = {};

                var startTime = new Date();
                var requestBody = JSON.stringify(request);

                var urlArr = [url];
                var getParams = PlayFab._internalSettings.requestGetParams;
                if (getParams != null) {
                    var firstParam = true;
                    for (var key in getParams) {
                        if (firstParam) {
                            urlArr.push("?");
                            firstParam = false;
                        } else {
                            urlArr.push("&");
                        }
                        urlArr.push(key);
                        urlArr.push("=");
                        urlArr.push(getParams[key]);
                    }
                }

                var completeUrl = urlArr.join("");

                var xhr = new XMLHttpRequest();
                // window.console.log("URL: " + completeUrl);
                xhr.open("POST", completeUrl, true);

                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("X-PlayFabSDK", "JavaScriptSDK-" + PlayFab._internalSettings.sdkVersion);
                if (authkey != null)
                    xhr.setRequestHeader(authkey, authValue);
                PlayFab._internalSettings.InjectHeaders(xhr, PlayFab.settings.GlobalHeaderInjection);
                PlayFab._internalSettings.InjectHeaders(xhr, extraHeaders);

                xhr.onloadend = function () {
                    if (callback == null)
                        return;

                    var result = PlayFab._internalSettings.GetPlayFabResponse(request, xhr, startTime, customData);
                    if (result.code === 200) {
                        callback(result, null);
                    } else {
                        callback(null, result);
                    }
                }

                xhr.onerror = function () {
                    if (callback == null)
                        return;

                    var result = PlayFab._internalSettings.GetPlayFabResponse(request, xhr, startTime, customData);
                    callback(null, result);
                }

                xhr.send(requestBody);
                xhr.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        var xhrResult = PlayFab._internalSettings.GetPlayFabResponse(request, this, startTime, customData);
                        if (this.status === 200) {
                            resolve(xhrResult);
                        } else {
                            reject(xhrResult);
                        }
                    }
                };
            });
            // Return a Promise so that calls to various API methods can be handled asynchronously
            return resultPromise;
        },

        GetPlayFabResponse: function(request, xhr, startTime, customData) {
            var result = null;
            try {
                // window.console.log("parsing json result: " + xhr.responseText);
                result = JSON.parse(xhr.responseText);
            } catch (e) {
                result = {
                    code: 503, // Service Unavailable
                    status: "Service Unavailable",
                    error: "Connection error",
                    errorCode: 2, // PlayFabErrorCode.ConnectionError
                    errorMessage: xhr.responseText
                };
            }

            result.CallBackTimeMS = new Date() - startTime;
            result.Request = request;
            result.CustomData = customData;
            return result;
        },

        authenticationContext: {
            PlayFabId: null,
            EntityId: null,
            EntityType: null,
            SessionTicket: null,
            EntityToken: null
        },

        UpdateAuthenticationContext: function (authenticationContext, result) {
            var authenticationContextUpdates = {};
            if(result.data.PlayFabId !== null) {
                PlayFab._internalSettings.authenticationContext.PlayFabId = result.data.PlayFabId;
                authenticationContextUpdates.PlayFabId = result.data.PlayFabId;
            }
            if(result.data.SessionTicket !== null) {
                PlayFab._internalSettings.authenticationContext.SessionTicket = result.data.SessionTicket;
                authenticationContextUpdates.SessionTicket = result.data.SessionTicket;
            }
            if (result.data.EntityToken !== null) {
                PlayFab._internalSettings.authenticationContext.EntityId = result.data.EntityToken.Entity.Id;
                authenticationContextUpdates.EntityId = result.data.EntityToken.Entity.Id;
                PlayFab._internalSettings.authenticationContext.EntityType = result.data.EntityToken.Entity.Type;
                authenticationContextUpdates.EntityType = result.data.EntityToken.Entity.Type;
                PlayFab._internalSettings.authenticationContext.EntityToken = result.data.EntityToken.EntityToken;
                authenticationContextUpdates.EntityToken = result.data.EntityToken.EntityToken;
            }
            // Update the authenticationContext with values from the result
            authenticationContext = Object.assign(authenticationContext, authenticationContextUpdates);
            return authenticationContext;
        },

        AuthInfoMap: {
            "X-EntityToken": {
                authAttr: "entityToken",
                authError: "errorEntityToken"
            },
            "X-Authorization": {
                authAttr: "sessionTicket",
                authError: "errorLoggedIn"
            },
            "X-SecretKey": {
                authAttr: "developerSecretKey",
                authError: "errorSecretKey"
            }
        },

        GetAuthInfo: function (request, authKey) {
            // Use the most-recently saved authKey, unless one was provided in the request via the AuthenticationContext
            var authError = PlayFab._internalSettings.AuthInfoMap[authKey].authError;
            var authAttr = PlayFab._internalSettings.AuthInfoMap[authKey].authAttr;
            var defaultAuthValue = null;
            if (authAttr === "entityToken")
                defaultAuthValue = PlayFab._internalSettings.entityToken;
            else if (authAttr === "sessionTicket")
                defaultAuthValue = PlayFab._internalSettings.sessionTicket;
            else if (authAttr === "developerSecretKey")
                defaultAuthValue = PlayFab.settings.developerSecretKey;
            var authValue = request.AuthenticationContext ? request.AuthenticationContext[authAttr] : defaultAuthValue;
            return {"authKey": authKey, "authValue": authValue, "authError": authError};
        },

        ExecuteRequestWrapper: function (apiURL, request, authKey, callback, customData, extraHeaders) {
            var authValue = null;
            if (authKey !== null){
                var authInfo = PlayFab._internalSettings.GetAuthInfo(request, authKey=authKey);
                var authKey = authInfo.authKey, authValue = authInfo.authValue, authError = authInfo.authError;

                if (!authValue) throw authError;
            }
            return PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + apiURL, request, authKey, authValue, callback, customData, extraHeaders);
        }
    }
}

PlayFab.buildIdentifier = "jbuild_javascriptbetasdk__sdk-genericslave-1_2";
PlayFab.sdkVersion = "1.69.200713";
PlayFab.GenerateErrorReport = function (error) {
    if (error == null)
        return "";
    var fullErrors = error.errorMessage;
    for (var paramName in error.errorDetails)
        for (var msgIdx in error.errorDetails[paramName])
            fullErrors += "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
};

PlayFab.EconomyApi = {
    ForgetAllCredentials: function () {
        PlayFab._internalSettings.sessionTicket = null;
        PlayFab._internalSettings.entityToken = null;
    },

    AddVirtualCurrencies: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/AddVirtualCurrencies", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ConsumeInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/ConsumeInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CraftRecipeByFriendlyId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/CraftRecipeByFriendlyId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CraftRecipeById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/CraftRecipeById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateBundle: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/CreateBundle", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateCurrency: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/CreateCurrency", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateDraftItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/CreateDraftItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateDraftUgcItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/UserGeneratedContent/CreateDraftUgcItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateOrUpdateReview: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/CreateOrUpdateReview", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateRecipe: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/CreateRecipe", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateStore: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/CreateStore", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateSubscription: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/CreateSubscription", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateUgcUploadUrls: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/UserGeneratedContent/CreateUgcUploadUrls", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateUploadUrls: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/CreateUploadUrls", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteBundleByFriendlyId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/DeleteBundleByFriendlyId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteBundleById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/DeleteBundleById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/DeleteItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteRecipeByFriendlyId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/DeleteRecipeByFriendlyId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteRecipeById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/DeleteRecipeById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteStoreByFriendlyId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/DeleteStoreByFriendlyId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteStoreById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/DeleteStoreById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteSubscriptionByFriendlyId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/DeleteSubscriptionByFriendlyId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteSubscriptionById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/DeleteSubscriptionById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteUgcItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/UserGeneratedContent/DeleteUgcItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetBundleByFriendlyId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetBundleByFriendlyId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetBundleById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetBundleById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetBundleByMarketplaceOfferId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetBundleByMarketplaceOfferId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetCatalogConfig: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetCatalogConfig", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetCurrencyById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetCurrencyById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetDraftBundleById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetDraftBundleById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetDraftBundles: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetDraftBundles", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetDraftItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetDraftItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetDraftItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetDraftItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetDraftStoreById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetDraftStoreById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetDraftStores: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetDraftStores", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetDraftUgcItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/UserGeneratedContent/GetDraftUgcItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetDraftUgcItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/UserGeneratedContent/GetDraftUgcItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/GetInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetItemReviews: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetItemReviews", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetItemReviewSummary: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetItemReviewSummary", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetMyReview: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetMyReview", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetPublishedItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetPublishedItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetPublishedUgcItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/UserGeneratedContent/GetPublishedUgcItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetPublishStatus: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetPublishStatus", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetRecipeByFriendlyId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetRecipeByFriendlyId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetRecipeById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetRecipeById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetRecipeByMarketplaceOfferId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetRecipeByMarketplaceOfferId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetStoreByFriendlyId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetStoreByFriendlyId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetStoreById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetStoreById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetSubscriptionByFriendlyId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetSubscriptionByFriendlyId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetSubscriptionById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetSubscriptionById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetSubscriptionByMarketplaceOfferId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetSubscriptionByMarketplaceOfferId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetUgcItemModerationState: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/UserGeneratedContent/GetUgcItemModerationState", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetUgcPublishStatus: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/UserGeneratedContent/GetUgcPublishStatus", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetVirtualCurrencies: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/GetVirtualCurrencies", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GrantInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/GrantInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    PublishItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/PublishItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    PublishUgcItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/UserGeneratedContent/PublishUgcItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    PurchaseItemByFriendlyId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/PurchaseItemByFriendlyId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    PurchaseItemById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/PurchaseItemById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ReportReview: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/ReportReview", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ReportUgcItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/UserGeneratedContent/ReportUgcItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    Search: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/Search", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SearchBundles: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/SearchBundles", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SearchForItemsContainingItemByFriendlyId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/SearchForItemsContainingItemByFriendlyId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SearchForItemsContainingItemById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/SearchForItemsContainingItemById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SearchInStoreByFriendlyId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/SearchInStoreByFriendlyId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SearchInStoreById: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/SearchInStoreById", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SearchRecipes: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/SearchRecipes", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SearchStores: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/SearchStores", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SearchSubscriptions: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/SearchSubscriptions", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SetInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/SetInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SetUgcItemModerationState: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/UserGeneratedContent/SetUgcItemModerationState", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SetVirtualCurrencies: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/SetVirtualCurrencies", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SubmitHelpfulnessVote: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/SubmitHelpfulnessVote", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SubtractVirtualCurrencies: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/SubtractVirtualCurrencies", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    TakedownReviews: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/TakedownReviews", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateBundle: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/UpdateBundle", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateCatalogConfig: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/UpdateCatalogConfig", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateCurrency: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/UpdateCurrency", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateDraftItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/UpdateDraftItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateDraftUgcItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/UserGeneratedContent/UpdateDraftUgcItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateInventoryItemsProperties: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/UpdateInventoryItemsProperties", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateRecipe: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/UpdateRecipe", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateStore: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/UpdateStore", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateSubscription: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/UpdateSubscription", request, "X-EntityToken", callback, customData, extraHeaders);
    },
};

var PlayFabEconomySDK = PlayFab.EconomyApi;

