/* eslint-disable no-throw-literal */
/// <reference path="../typings/PlayFab/PlayFabEconomy.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.AddVirtualCurrencies = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Inventory/AddVirtualCurrencies",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.ConsumeInventoryItems = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Inventory/ConsumeInventoryItems",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.CraftRecipeByFriendlyId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/CraftRecipeByFriendlyId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.CraftRecipeById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/CraftRecipeById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.CreateBundle = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/CreateBundle",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.CreateCurrency = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/CreateCurrency",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.CreateDraftItem = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/CreateDraftItem",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.CreateDraftUgcItem = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/UserGeneratedContent/CreateDraftUgcItem",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.CreateOrUpdateReview = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/CreateOrUpdateReview",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.CreateRecipe = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/CreateRecipe",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.CreateStore = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/CreateStore",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.CreateSubscription = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/CreateSubscription",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.CreateUgcUploadUrls = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/UserGeneratedContent/CreateUgcUploadUrls",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.CreateUploadUrls = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/CreateUploadUrls",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.DeleteBundleByFriendlyId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/DeleteBundleByFriendlyId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.DeleteBundleById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/DeleteBundleById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.DeleteItem = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/DeleteItem",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.DeleteRecipeByFriendlyId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/DeleteRecipeByFriendlyId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.DeleteRecipeById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/DeleteRecipeById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.DeleteStoreByFriendlyId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/DeleteStoreByFriendlyId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.DeleteStoreById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/DeleteStoreById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.DeleteSubscriptionByFriendlyId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/DeleteSubscriptionByFriendlyId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.DeleteSubscriptionById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/DeleteSubscriptionById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.DeleteUgcItem = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/UserGeneratedContent/DeleteUgcItem",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetBundleByFriendlyId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetBundleByFriendlyId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetBundleById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetBundleById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetBundleByMarketplaceOfferId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetBundleByMarketplaceOfferId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetCatalogConfig = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetCatalogConfig",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetCurrencyById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetCurrencyById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetDraftBundleById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetDraftBundleById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetDraftBundles = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetDraftBundles",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetDraftItem = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetDraftItem",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetDraftItems = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetDraftItems",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetDraftStoreById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetDraftStoreById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetDraftStores = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetDraftStores",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetDraftUgcItem = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/UserGeneratedContent/GetDraftUgcItem",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetDraftUgcItems = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/UserGeneratedContent/GetDraftUgcItems",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetInventoryItems = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Inventory/GetInventoryItems",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetItemReviews = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetItemReviews",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetItemReviewSummary = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetItemReviewSummary",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetMyReview = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetMyReview",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetPublishedItem = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetPublishedItem",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetPublishedUgcItem = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/UserGeneratedContent/GetPublishedUgcItem",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetPublishStatus = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetPublishStatus",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetRecipeByFriendlyId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetRecipeByFriendlyId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetRecipeById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetRecipeById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetRecipeByMarketplaceOfferId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetRecipeByMarketplaceOfferId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetStoreByFriendlyId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetStoreByFriendlyId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetStoreById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetStoreById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetSubscriptionByFriendlyId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetSubscriptionByFriendlyId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetSubscriptionById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetSubscriptionById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetSubscriptionByMarketplaceOfferId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/GetSubscriptionByMarketplaceOfferId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetUgcItemModerationState = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/UserGeneratedContent/GetUgcItemModerationState",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetUgcPublishStatus = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/UserGeneratedContent/GetUgcPublishStatus",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GetVirtualCurrencies = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Inventory/GetVirtualCurrencies",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.GrantInventoryItems = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Inventory/GrantInventoryItems",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.PublishItem = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/PublishItem",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.PublishUgcItem = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/UserGeneratedContent/PublishUgcItem",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.PurchaseItemByFriendlyId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/PurchaseItemByFriendlyId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.PurchaseItemById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/PurchaseItemById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.ReportReview = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/ReportReview",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.ReportUgcItem = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/UserGeneratedContent/ReportUgcItem",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.Search = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/Search",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.SearchBundles = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/SearchBundles",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.SearchForItemsContainingItemByFriendlyId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/SearchForItemsContainingItemByFriendlyId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.SearchForItemsContainingItemById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/SearchForItemsContainingItemById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.SearchInStoreByFriendlyId = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/SearchInStoreByFriendlyId",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.SearchInStoreById = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/SearchInStoreById",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.SearchRecipes = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/SearchRecipes",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.SearchStores = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/SearchStores",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.SearchSubscriptions = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/SearchSubscriptions",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.SetInventoryItems = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Inventory/SetInventoryItems",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.SetUgcItemModerationState = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/UserGeneratedContent/SetUgcItemModerationState",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.SetVirtualCurrencies = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Inventory/SetVirtualCurrencies",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.SubmitHelpfulnessVote = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/SubmitHelpfulnessVote",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.SubtractVirtualCurrencies = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Inventory/SubtractVirtualCurrencies",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.TakedownReviews = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/TakedownReviews",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.UpdateBundle = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/UpdateBundle",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.UpdateCatalogConfig = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/UpdateCatalogConfig",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.UpdateCurrency = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/UpdateCurrency",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.UpdateDraftItem = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/UpdateDraftItem",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.UpdateDraftUgcItem = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/UserGeneratedContent/UpdateDraftUgcItem",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.UpdateInventoryItemsProperties = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Inventory/UpdateInventoryItemsProperties",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.UpdateRecipe = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/UpdateRecipe",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.UpdateStore = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/UpdateStore",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};

exports.UpdateSubscription = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Catalog/UpdateSubscription",
    request,
    "X-EntityToken",
    PlayFab._internalSettings.entityToken,
    function (error, result) {
      if (callback != null) {
        callback(error, result);
      }
    },
  );
};
