/// <reference path="Playfab.d.ts" />

declare module PlayFabEconomyModule {
    export interface IPlayFabEconomy {
        ForgetAllCredentials(): void;

        /**
         * Increase virtual currencies amount.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/addvirtualcurrencies
         */
        AddVirtualCurrencies(request: PlayFabEconomyModels.AddVirtualCurrenciesRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.AddVirtualCurrenciesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Consume inventory items.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/consumeinventoryitems
         */
        ConsumeInventoryItems(request: PlayFabEconomyModels.ConsumeInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ConsumeInventoryItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Craft a recipe by friendly id.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/craftrecipebyfriendlyid
         */
        CraftRecipeByFriendlyId(request: PlayFabEconomyModels.CraftRecipeByFriendlyIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CraftRecipeResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Craft a recipe by id.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/craftrecipebyid
         */
        CraftRecipeById(request: PlayFabEconomyModels.CraftRecipeByIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CraftRecipeResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Create a bundle
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createbundle
         */
        CreateBundle(request: PlayFabEconomyModels.CreateBundleRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateBundleResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Create a currency
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createcurrency
         */
        CreateCurrency(request: PlayFabEconomyModels.CreateCurrencyRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateCurrencyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates a new item in the working catalog using provided metadata.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createdraftitem
         */
        CreateDraftItem(request: PlayFabEconomyModels.CreateDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateDraftItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates a new community catalog item in the working catalog using provided metadata.
         * https://docs.microsoft.com/rest/api/playfab/economy/usergeneratedcontent/createdraftugcitem
         */
        CreateDraftUgcItem(request: PlayFabEconomyModels.CreateDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateDraftItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates or updates a review for the specified item.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createorupdatereview
         */
        CreateOrUpdateReview(request: PlayFabEconomyModels.CreateOrUpdateReviewRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateOrUpdateReviewResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Create a recipe
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createrecipe
         */
        CreateRecipe(request: PlayFabEconomyModels.CreateRecipeRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateRecipeResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Create a store
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createstore
         */
        CreateStore(request: PlayFabEconomyModels.CreateStoreRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateStoreResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Create a subscription
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createsubscription
         */
        CreateSubscription(request: PlayFabEconomyModels.CreateSubscriptionRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateSubscriptionResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates one or more upload URLs which can be used by the client to upload raw mod file data.
         * https://docs.microsoft.com/rest/api/playfab/economy/usergeneratedcontent/createugcuploadurls
         */
        CreateUgcUploadUrls(request: PlayFabEconomyModels.CreateUploadUrlsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateUploadUrlsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates one or more upload URLs which can be used by the client to upload raw file data.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createuploadurls
         */
        CreateUploadUrls(request: PlayFabEconomyModels.CreateUploadUrlsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateUploadUrlsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Delete a bundle by friendly Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deletebundlebyfriendlyid
         */
        DeleteBundleByFriendlyId(request: PlayFabEconomyModels.DeleteBundleByFriendlyIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteBundleResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Delete a bundle by Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deletebundlebyid
         */
        DeleteBundleById(request: PlayFabEconomyModels.DeleteBundleByIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteBundleResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes an item from working catalog and all published versions from the public catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deleteitem
         */
        DeleteItem(request: PlayFabEconomyModels.DeleteItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Delete a recipe by friendly Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deleterecipebyfriendlyid
         */
        DeleteRecipeByFriendlyId(request: PlayFabEconomyModels.DeleteRecipeByFriendlyIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteRecipeResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Delete a recipe by Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deleterecipebyid
         */
        DeleteRecipeById(request: PlayFabEconomyModels.DeleteRecipeByIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteRecipeResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Delete a store by friendly Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deletestorebyfriendlyid
         */
        DeleteStoreByFriendlyId(request: PlayFabEconomyModels.DeleteStoreByFriendlyIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteStoreResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Delete a store by Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deletestorebyid
         */
        DeleteStoreById(request: PlayFabEconomyModels.DeleteStoreByIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteStoreResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Delete a subscription by friendly Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deletesubscriptionbyfriendlyid
         */
        DeleteSubscriptionByFriendlyId(request: PlayFabEconomyModels.DeleteSubscriptionByFriendlyIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteSubscriptionResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Delete a subscription by Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deletesubscriptionbyid
         */
        DeleteSubscriptionById(request: PlayFabEconomyModels.DeleteSubscriptionByIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteSubscriptionResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes an item from working catalog and all published versions from the public catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/usergeneratedcontent/deleteugcitem
         */
        DeleteUgcItem(request: PlayFabEconomyModels.DeleteItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a bundle by Friendly Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getbundlebyfriendlyid
         */
        GetBundleByFriendlyId(request: PlayFabEconomyModels.GetBundleByFriendlyIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetBundleResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a bundle by Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getbundlebyid
         */
        GetBundleById(request: PlayFabEconomyModels.GetBundleByIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetBundleResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a bundle by marketplace offer Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getbundlebymarketplaceofferid
         */
        GetBundleByMarketplaceOfferId(request: PlayFabEconomyModels.GetBundleByMarketplaceOfferIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetBundleResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the configuration for the catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getcatalogconfig
         */
        GetCatalogConfig(request: PlayFabEconomyModels.GetCatalogConfigRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetCatalogConfigResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieve a currency by id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getcurrencybyid
         */
        GetCurrencyById(request: PlayFabEconomyModels.GetCurrencyByIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetCurrencyByIdResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a bundle draft metadata from the working catalog. This item represents the current working state of the
         * catalog item. Note: This item metadata may not be published yet so it may be different than what's currently visible in
         * search results.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftbundlebyid
         */
        GetDraftBundleById(request: PlayFabEconomyModels.GetDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a paginated list of the bundle items from the draft catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftbundles
         */
        GetDraftBundles(request: PlayFabEconomyModels.GetDraftItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves an item from the working catalog. This item represents the current working state of the catalog item.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftitem
         */
        GetDraftItem(request: PlayFabEconomyModels.GetDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a paginated list of the items from the draft catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftitems
         */
        GetDraftItems(request: PlayFabEconomyModels.GetDraftItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a store draft metadata from the working catalog. This item represents the current working state of the catalog
         * item. Note: This item metadata may not be published yet so it may be different than what's currently visible in search
         * results.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftstorebyid
         */
        GetDraftStoreById(request: PlayFabEconomyModels.GetDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a paginated list of the store items from the draft catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftstores
         */
        GetDraftStores(request: PlayFabEconomyModels.GetDraftItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves an item from the working catalog. This item represents the current working state of the community item.
         * https://docs.microsoft.com/rest/api/playfab/economy/usergeneratedcontent/getdraftugcitem
         */
        GetDraftUgcItem(request: PlayFabEconomyModels.GetDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a paginated list of the items created by a user.
         * https://docs.microsoft.com/rest/api/playfab/economy/usergeneratedcontent/getdraftugcitems
         */
        GetDraftUgcItems(request: PlayFabEconomyModels.GetDraftItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get current inventory items.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getinventoryitems
         */
        GetInventoryItems(request: PlayFabEconomyModels.GetInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetInventoryItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a paginated set of reviews associated with the specified item.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemreviews
         */
        GetItemReviews(request: PlayFabEconomyModels.GetReviewsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetReviewsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a summary of all reviews associated with the specified item.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemreviewsummary
         */
        GetItemReviewSummary(request: PlayFabEconomyModels.ReviewSummaryRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ReviewSummaryResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the submitted review for the specifed item by the authenticated user.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getmyreview
         */
        GetMyReview(request: PlayFabEconomyModels.GetMyReviewRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetMyReviewResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves an item from the public catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getpublisheditem
         */
        GetPublishedItem(request: PlayFabEconomyModels.GetPublishedItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetPublishedItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves an item from the public catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/usergeneratedcontent/getpublishedugcitem
         */
        GetPublishedUgcItem(request: PlayFabEconomyModels.GetPublishedItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetPublishedItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the status of a publish of an item.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getpublishstatus
         */
        GetPublishStatus(request: PlayFabEconomyModels.PublishStatusRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.PublishStatusResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a recipe by Friendly Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getrecipebyfriendlyid
         */
        GetRecipeByFriendlyId(request: PlayFabEconomyModels.GetRecipeByFriendlyIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetRecipeResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a recipe by Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getrecipebyid
         */
        GetRecipeById(request: PlayFabEconomyModels.GetRecipeByIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetRecipeResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a recipe by marketplace offer Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getrecipebymarketplaceofferid
         */
        GetRecipeByMarketplaceOfferId(request: PlayFabEconomyModels.GetRecipeByMarketplaceOfferIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetRecipeResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a store by Friendly Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getstorebyfriendlyid
         */
        GetStoreByFriendlyId(request: PlayFabEconomyModels.GetStoreByFriendlyIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetStoreResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a store by Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getstorebyid
         */
        GetStoreById(request: PlayFabEconomyModels.GetStoreByIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetStoreResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a subscription by Friendly Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getsubscriptionbyfriendlyid
         */
        GetSubscriptionByFriendlyId(request: PlayFabEconomyModels.GetSubscriptionByFriendlyIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetSubscriptionResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a subscription by Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getsubscriptionbyid
         */
        GetSubscriptionById(request: PlayFabEconomyModels.GetSubscriptionByIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetSubscriptionResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a subscription by marketplace offer Id
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getsubscriptionbymarketplaceofferid
         */
        GetSubscriptionByMarketplaceOfferId(request: PlayFabEconomyModels.GetSubscriptionByMarketplaceOfferIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetSubscriptionResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the moderation state for an item, including the concern category and string reason.
         * https://docs.microsoft.com/rest/api/playfab/economy/usergeneratedcontent/getugcitemmoderationstate
         */
        GetUgcItemModerationState(request: PlayFabEconomyModels.GetUgcItemModerationStateRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetUgcItemModerationStateResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the status of a publish of an item.
         * https://docs.microsoft.com/rest/api/playfab/economy/usergeneratedcontent/getugcpublishstatus
         */
        GetUgcPublishStatus(request: PlayFabEconomyModels.PublishStatusRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.PublishStatusResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get current virtual currencies.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getvirtualcurrencies
         */
        GetVirtualCurrencies(request: PlayFabEconomyModels.GetVirtualCurrenciesRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetVirtualCurrenciesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Grant inventory items.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/grantinventoryitems
         */
        GrantInventoryItems(request: PlayFabEconomyModels.GrantInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GrantInventoryItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Initiates a publish of an item from the working catalog to the public catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/publishitem
         */
        PublishItem(request: PlayFabEconomyModels.PublishItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.PublishItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Initiates a publish of a item from the working catalog to the public catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/usergeneratedcontent/publishugcitem
         */
        PublishUgcItem(request: PlayFabEconomyModels.PublishItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.PublishItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Purchase an item, bundle or subscription by friendly id.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/purchaseitembyfriendlyid
         */
        PurchaseItemByFriendlyId(request: PlayFabEconomyModels.PurchaseItemByFriendlyIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.PurchaseItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Purchase an item, bundle or subscription by id.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/purchaseitembyid
         */
        PurchaseItemById(request: PlayFabEconomyModels.PurchaseItemByIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.PurchaseItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Submit a report for a review
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/reportreview
         */
        ReportReview(request: PlayFabEconomyModels.ReportReviewRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ReportReviewResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Submit a report for an item, indicating in what way the item is inappropriate.
         * https://docs.microsoft.com/rest/api/playfab/economy/usergeneratedcontent/reportugcitem
         */
        ReportUgcItem(request: PlayFabEconomyModels.ReportItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ReportItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Execute a search against the public catalog using the provided search parameters and returns a set of paginated results.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/search
         */
        Search(request: PlayFabEconomyModels.CatalogSearchRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CatalogSearchResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Execute a search against the set of all bundles, using the provided search parameters and returns a set of paginated
         * results
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/searchbundles
         */
        SearchBundles(request: PlayFabEconomyModels.SearchBundlesRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SearchBundlesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Search for a given item (by friendly id) and return a set of bundles/subscriptions/stores containing the item
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/searchforitemscontainingitembyfriendlyid
         */
        SearchForItemsContainingItemByFriendlyId(request: PlayFabEconomyModels.SearchForItemsContainingItemByFriendlyIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SearchForItemsContainingItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Search for a given item (by id) and return a set of bundles/subscriptions/stores containing the item
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/searchforitemscontainingitembyid
         */
        SearchForItemsContainingItemById(request: PlayFabEconomyModels.SearchForItemsContainingItemByIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SearchForItemsContainingItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Execute a search against a specified store (by friendly id) using the provided search parameters and return a set of
         * paginated results
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/searchinstorebyfriendlyid
         */
        SearchInStoreByFriendlyId(request: PlayFabEconomyModels.SearchInStoreByFriendlyIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SearchInStoreResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Execute a search against a specified store (by id) using the provided search parameters and return a set of paginated
         * results
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/searchinstorebyid
         */
        SearchInStoreById(request: PlayFabEconomyModels.SearchInStoreByIdRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SearchInStoreResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Execute a search against the set of all recipes, using the provided search parameters and returns a set of paginated
         * results
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/searchrecipes
         */
        SearchRecipes(request: PlayFabEconomyModels.SearchRecipesRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SearchRecipesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Execute a search against the set of all stores, using the provided search parameters and returns a set of paginated
         * results
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/searchstores
         */
        SearchStores(request: PlayFabEconomyModels.SearchStoresRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SearchStoresResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Execute a search against the set of all subscriptions, using the provided search parameters and returns a set of
         * paginated results
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/searchsubscriptions
         */
        SearchSubscriptions(request: PlayFabEconomyModels.SearchSubscriptionsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SearchSubscriptionsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Set inventory items
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/setinventoryitems
         */
        SetInventoryItems(request: PlayFabEconomyModels.SetInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SetInventoryItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Sets the moderation state for an item, including the concern category and string reason.
         * https://docs.microsoft.com/rest/api/playfab/economy/usergeneratedcontent/setugcitemmoderationstate
         */
        SetUgcItemModerationState(request: PlayFabEconomyModels.SetUgcItemModerationStateRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SetUgcItemModerationStateResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Set virtual currencies
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/setvirtualcurrencies
         */
        SetVirtualCurrencies(request: PlayFabEconomyModels.SetVirtualCurrenciesRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SetVirtualCurrenciesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Submit a vote for a review, indicating whether the review was helpful or unhelpful.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/submithelpfulnessvote
         */
        SubmitHelpfulnessVote(request: PlayFabEconomyModels.HelpfulnessVoteRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.HelpfulnessVoteResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Decrease virtual currencies amount.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/subtractvirtualcurrencies
         */
        SubtractVirtualCurrencies(request: PlayFabEconomyModels.SubtractVirtualCurrenciesRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SubtractVirtualCurrenciesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Submit a request to takedown one or more reviews.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/takedownreviews
         */
        TakedownReviews(request: PlayFabEconomyModels.TakedownReviewsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.TakedownReviewsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Update a bundle
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatebundle
         */
        UpdateBundle(request: PlayFabEconomyModels.UpdateBundleRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateBundleResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the configuration for the catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatecatalogconfig
         */
        UpdateCatalogConfig(request: PlayFabEconomyModels.UpdateCatalogConfigRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateCatalogConfigResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Update a currency
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatecurrency
         */
        UpdateCurrency(request: PlayFabEconomyModels.UpdateCurrencyRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateCurrencyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Update the metadata for an item in the working catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatedraftitem
         */
        UpdateDraftItem(request: PlayFabEconomyModels.UpdateDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateDraftItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Update the metadata for an item in the working catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/usergeneratedcontent/updatedraftugcitem
         */
        UpdateDraftUgcItem(request: PlayFabEconomyModels.UpdateDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateDraftItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Update inventory Items.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/updateinventoryitemsproperties
         */
        UpdateInventoryItemsProperties(request: PlayFabEconomyModels.UpdateInventoryItemsPropertiesRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateInventoryPropertiesItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Update a recipe
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updaterecipe
         */
        UpdateRecipe(request: PlayFabEconomyModels.UpdateRecipeRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateRecipeResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Update a store
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatestore
         */
        UpdateStore(request: PlayFabEconomyModels.UpdateStoreRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateStoreResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Update a subscription
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatesubscription
         */
        UpdateSubscription(request: PlayFabEconomyModels.UpdateSubscriptionRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateSubscriptionResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabEconomyModels {
    export interface AddVirtualCurrenciesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** A list of currencies to modify */
        Currencies: CurrencyDetails[];
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface AddVirtualCurrenciesResult extends PlayFabModule.IPlayFabResultCommon  {
        Currencies?: CurrencyResponseDto[];
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface CatalogAlternateId {
        /** Type of the alternate Id */
        Type?: string;
        /** Value of the alternate Id */
        Value?: string;

    }

    export interface CatalogConfig {
        /** A list of title player accounts that will have admin permissions. */
        Admins?: string[];
        /** The set of configuration that only applies to catalog items. */
        Catalog?: CatalogSpecificConfig;
        /** A list of deep link formats. */
        DeepLinkFormats?: DeepLinkFormat[];
        /** A list of display properties to index. */
        DisplayPropertyIndexInfos?: DisplayPropertyIndexInfo[];
        /** A set of player entity keys that are allowed to review content. */
        Reviewers?: string[];
        /** The set of configuration that only applies to user generated contents. */
        UserGeneratedContent?: UserGeneratedContentSpecificConfig;

    }

    export interface CatalogItemMetadata {
        /** Indicates whether there can be multiple stacks of this item. */
        AllowMultipleStacks?: boolean;
        /** The alternate IDs associated with this item. */
        AlternateIds?: CatalogAlternateId[];
        /** The boost factor applied at search time of the item. */
        BoostFactor?: number;
        /** The set of contents associated with this item. */
        Contents?: Content[];
        /** The client-defined type of the item. */
        ContentType?: string;
        /** The date and time when this item was created. */
        CreationDate?: string;
        /** The ID of the creator of this catalog item. */
        CreatorEntityKey?: EntityKey;
        /** The set of platform specific deep links for this item. */
        DeepLinks?: DeepLink[];
        /**
         * A dictionary of localized descriptions. Key is language code and localized string is the value. The neutral locale is
         * required.
         */
        Description?: { [key: string]: string | null };
        /** Game specific properties for display purposes. This is an arbitrary JSON blob. */
        DisplayProperties?: any;
        /** The user provided version of the item for display purposes. */
        DisplayVersion?: string;
        /** The date of when the item will cease to be available. If not provided then the product will be available indefinitely. */
        EndDate?: string;
        /** The current ETag value that can be used for optimistic concurrency in the If-None-Match header. */
        ETag?: string;
        /** The unique ID of the item. */
        Id?: string;
        /** The images associated with this item. Images can be thumbnails or screenshots. */
        Images?: Image[];
        /** Indicates whether the item is a consumable or durable. */
        IsConsumable?: boolean;
        /** Indicates if the item is hidden. */
        IsHidden?: boolean;
        /** Indicates if this item can be stacked or if they should be handled individually. */
        IsStackable?: boolean;
        /** The item references associated with this item. */
        ItemReferences?: CatalogItemReference[];
        /** A dictionary of localized keywords. Key is language code and localized list of keywords is the value. */
        Keywords?: { [key: string]: KeywordSet };
        /** The date and time this item was last updated. */
        LastModifiedDate?: string;
        /** The moderation state for this item. */
        Moderation?: ModerationState;
        /** The payout information of the payee. */
        PayoutInfo?: PayoutInfo;
        /** The platforms supported by this item. */
        Platforms?: string[];
        /** The base price of this item. */
        Price?: CatalogPrice;
        /** Rating summary for this UGC item. */
        Rating?: Rating;
        /** The title or namespace that this item belongs to. */
        SourceEntityKey?: EntityKey;
        /** The date of when the item will be available. If not provided then the product will appear immediately. */
        StartDate?: string;
        /** Additional metadata for subscription items. */
        Subscription?: SubscriptionDetails;
        /** The list of tags that are associated with this item. */
        Tags?: string[];
        /**
         * A dictionary of localized titles. Key is language code and localized string is the value. The neutral locale is
         * required.
         */
        Title?: { [key: string]: string | null };
        /** The high-level type of the item. */
        Type?: string;

    }

    export interface CatalogItemReference {
        /** The amount of the catalog item. */
        Amount?: number;
        /** The unique ID of the catalog item. */
        Id?: string;
        /** The price of the catalog item. */
        Price?: CatalogPrice;

    }

    export interface CatalogPrice {
        /** The amount the payee will receive. */
        PayoutAmount?: number;
        /** Prices of the catalog item. */
        Prices?: CatalogPriceInstance[];
        /** Real prices of the catalog item. */
        RealPrices?: CatalogPriceInstance[];
        /** Sort setting of the catalog item. */
        Sort?: number;

    }

    export interface CatalogPriceAmount {
        /** The amount of the catalog price. */
        Amount: number;
        /** The currency ID of the catalog price. */
        CurrencyId?: string;

    }

    export interface CatalogPriceInstance {
        /** The amounts of the catalog item price. */
        Amounts?: CatalogPriceAmount[];

    }

    export interface CatalogSearchRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The search configuration to use for this search. */
        ConfigurationName?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** An OData filter used to refine the search query. */
        Filter?: string;
        /** An OData orderBy used to order the results of the search query. */
        OrderBy?: string;
        /** The text to search for. */
        Search?: string;
        /**
         * An OData select query option used to augment the search results. If not defined, the default search result metadata will
         * be returned.
         */
        Select?: string;
        /** The number of results to skip. */
        Skip: number;
        /** The title or namespace to search under. */
        SourceEntityKey?: EntityKey;
        /** The ID of the title that this catalog item is associated with. */
        TitleId?: string;
        /** The number of results to retrieve. */
        Top: number;

    }

    export interface CatalogSearchResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The name of the search configuration that was used for the search query. */
        ConfigurationName?: string;
        /** The total count of hits for the search query. */
        Count?: number;
        /** The paginated set of results for the search query. */
        Items?: CatalogItemMetadata[];

    }

    export interface CatalogSpecificConfig {
        /** The set of content types that will be used for validation and if no values are provided then anything is allowed. */
        ContentTypes?: string[];
        /** The set of tags that will be used for validation and if no values are provided then anything is allowed. */
        Tags?: string[];

    }

    type ConcernCategory = "None"
        | "OffensiveContent"
        | "ChildExploitation"
        | "MalwareOrVirus"
        | "PrivacyConcerns"
        | "MisleadingApp"
        | "PoorPerformance"
        | "ReviewResponse"
        | "SpamAdvertising"
        | "Profanity";

    export interface ConsumeInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        /** A list of Items to modify */
        Items: InventoryItemDetails[];

    }

    export interface ConsumeInventoryItemsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Items?: InventoryItemResponseDto[];

    }

    type ContainerType = "None"
        | "Bundles"
        | "Stores"
        | "Subscriptions"
        | "Recipes";

    export interface Content {
        Id?: string;
        /** The maximum client version that this content is compatible with. */
        MaxClientVersion?: string;
        /** The minimum client version that this content is compatible with. */
        MinClientVersion?: string;
        /** The list of tags that are associated with this content. */
        Tags?: string[];
        /** The client-defined type of the content. */
        Type?: string;
        /** The Azure CDN URL for retrieval of the catalog item binary content. */
        Url?: string;

    }

    export interface CraftRecipeByFriendlyIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Sets a value indicating whether the crafted item should be automatically consumed. The specified item quantity will be
         * both increased and decreased.
         */
        AutoConsume: boolean;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        /** The ingredients used to craft the recipe. */
        Ingredients?: CraftRecipeIngredient[];
        /** Additional properties to be associated with crafted item. */
        Properties?: { [key: string]: string | null };
        /** The quantity of the item to craft. */
        Quantity: number;
        /** Friendly identifier of the recipe to craft. */
        RecipeFriendlyId: string;
        /** Indicates if the full inventory should be returned. */
        ReturnInventory: boolean;
        /** The store to craft the item through. */
        Store?: PurchaseStoreInfo;
        /** The Universal account ID for the creator of the item. */
        Uaid?: string;

    }

    export interface CraftRecipeByIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Sets a value indicating whether the crafted item should be automatically consumed. The specified item quantity will be
         * both increased and decreased.
         */
        AutoConsume: boolean;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        /** The ingredients used to craft the recipe. */
        Ingredients?: CraftRecipeIngredient[];
        /** Additional properties to be associated with crafted item. */
        Properties?: { [key: string]: string | null };
        /** The quantity of the item to craft. */
        Quantity: number;
        /** Unique identifier of the recipe to craft. */
        RecipeId: string;
        /** Indicates if the full inventory should be returned. */
        ReturnInventory: boolean;
        /** The store to craft the item through. */
        Store?: PurchaseStoreInfo;
        /** The Universal account ID for the creator of the item. */
        Uaid?: string;

    }

    export interface CraftRecipeIngredient {
        /** Amount the client expects to use to craft the item. */
        ExpectedAmount: number;
        /** The unique identifier of the ingredient. */
        IngredientId: string;

    }

    export interface CraftRecipeResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Details for the items crafted. */
        CraftedItems?: CraftRecipeResultItem[];
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        /** Details of the ingredients used to craft the recipe. */
        Ingredients?: CraftRecipeResultIngredient[];
        /** Details of the current inventory items. */
        InventoryItems?: CraftRecipeResultItem[];
        /** Indicates whether the number of inventory items is too large to be returned. */
        InventoryTooLarge: boolean;

    }

    export interface CraftRecipeResultIngredient {
        /** The total amount of the ingredient on inventory. */
        Amount: number;
        /** The amount of the ingredient used in this call. */
        ChangedAmount: number;
        /** The ID of the currency used in this crafting operation. */
        IngredientId?: string;

    }

    export interface CraftRecipeResultItem {
        /** The total amount of the item on inventory. */
        Amount: number;
        /** The amount of the item purchased in this call. */
        ChangedAmount?: number;
        /** Friendly id of the item. */
        FriendlyId?: string;
        /** Unique item identifier for this specific instance of the item. */
        InstanceId?: string;
        /** Unique identifier of the item. */
        ItemId?: string;
        /** The type of item. */
        ItemType?: string;
        /** The properties associated to the currency. */
        Properties?: { [key: string]: string | null };

    }

    export interface CreateBundleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Allow overwrite */
        AllowOverwrite: boolean;
        /** Bundle details */
        Bundle: CatalogItemMetadata;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface CreateBundleResult extends PlayFabModule.IPlayFabResultCommon  {
        Bundle?: CatalogItemMetadata;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface CreateCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Metadata describing the new currency item to be created. */
        Currency: CatalogItemMetadata;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    export interface CreateCurrencyResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Updated metadata describing the catalog item just created. */
        CurrencyMetadata?: CatalogItemMetadata;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    export interface CreateDraftItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** Metadata describing the new catalog item to be created. */
        Item: CatalogItemMetadata;

    }

    export interface CreateDraftItemResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Updated metadata describing the catalog item just created. */
        Item?: CatalogItemMetadata;

    }

    export interface CreateOrUpdateReviewRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The ID of the item to submit a review for. */
        ItemId?: string;
        /** The review to submit. */
        Review?: ReviewSubmission;

    }

    export interface CreateOrUpdateReviewResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface CreateRecipeRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Allow overwrite */
        AllowOverwrite: boolean;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Recipe details */
        Recipe: CatalogItemMetadata;

    }

    export interface CreateRecipeResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Recipe?: CatalogItemMetadata;

    }

    export interface CreateStoreRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Allow overwrite */
        AllowOverwrite: boolean;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** Store details */
        Store: CatalogItemMetadata;

    }

    export interface CreateStoreResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Store?: CatalogItemMetadata;

    }

    export interface CreateSubscriptionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Allow overwrite */
        AllowOverwrite: boolean;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Subscription details */
        Subscription: CatalogItemMetadata;

    }

    export interface CreateSubscriptionResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Subscription?: CatalogItemMetadata;

    }

    export interface CreateUploadUrlsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** Description of the files to be uploaded by the client. */
        Files?: UploadInfo[];
        /** The title or namespace that this content belongs to. */
        SourceEntityKey?: EntityKey;

    }

    export interface CreateUploadUrlsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Urls and metadata for the files to be uploaded by the client. */
        UploadUrls?: UploadUrlMetadata[];

    }

    export interface CurrencyDetails {
        AlternateId?: CatalogAlternateId;
        Amount: number;
        CurrencyId?: string;
        InstanceId?: string;

    }

    export interface CurrencyResponseDto {
        Amount: number;
        ChangedAmount?: number;
        CurrencyId?: string;

    }

    export interface DeepLink {
        /** Target platform for this deep link. */
        Platform?: string;
        /** The deep link for this platform. */
        Url?: string;

    }

    export interface DeepLinkFormat {
        /** The format of the deep link to return. The format should contain '{id}' to represent where the item ID should be placed. */
        Format?: string;
        /** The target platform for the deep link. */
        Platform?: string;

    }

    export interface DeleteBundleByFriendlyIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The friendly Id of target bundle. */
        FriendlyId?: string;
        /** The title or namespace the bundle is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface DeleteBundleByIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Id of target bundle */
        Id?: string;
        /** The title or namespace the bundle is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface DeleteBundleResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface DeleteItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** ID of the catalog item to delete. */
        ItemId?: string;

    }

    export interface DeleteItemResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteRecipeByFriendlyIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The friendly Id of target recipe. */
        FriendlyId?: string;
        /** The title or namespace the recipe is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface DeleteRecipeByIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The Id of target recipe */
        Id?: string;
        /** The title or namespace the recipe is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface DeleteRecipeResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface DeleteStoreByFriendlyIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The friendly Id of target store. */
        FriendlyId?: string;
        /** The title or namespace the store is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface DeleteStoreByIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** Id of target store */
        Id?: string;
        /** The title or namespace the store is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface DeleteStoreResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface DeleteSubscriptionByFriendlyIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The friendly Id of target subscription. */
        FriendlyId?: string;
        /** The title or namespace the subscription is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface DeleteSubscriptionByIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The Id of target subscription */
        Id?: string;
        /** The title or namespace the subscription is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface DeleteSubscriptionResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface DisplayPropertyIndexInfo {
        /** The property name in the 'DisplayProperties' property to be indexed. */
        Name?: string;
        /** The type of the property to be indexed. */
        Type?: string;

    }

    type DisplayPropertyType = "QueryDateTime"
        | "QueryDouble"
        | "QueryString"
        | "SearchString";

    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string;

    }

    export interface GetBundleByFriendlyIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether to expand the referenced items */
        ExpandReferencedItems: boolean;
        /** The friendly Id of target bundle. */
        FriendlyId?: string;
        /** The title or namespace the item is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface GetBundleByIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether to expand the referenced items */
        ExpandReferencedItems: boolean;
        /** Id of target bundle */
        Id?: string;
        /** The title or namespace the item is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface GetBundleByMarketplaceOfferIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether to expand the referenced items */
        ExpandReferencedItems: boolean;
        /** The Marketplace offer Id of target bundle. */
        MarketplaceOfferId?: CatalogAlternateId;
        /** The title or namespace the item is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface GetBundleResult extends PlayFabModule.IPlayFabResultCommon  {
        Bundle?: CatalogItemMetadata;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        ReferencedItems?: CatalogItemMetadata[];

    }

    export interface GetCatalogConfigRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface GetCatalogConfigResult extends PlayFabModule.IPlayFabResultCommon  {
        Config?: CatalogConfig;

    }

    export interface GetCurrencyByIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** ID of the currency to retrieve. */
        CurrencyId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    export interface GetCurrencyByIdResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Full metadata of the currency requested. */
        Currency?: CatalogItemMetadata;

    }

    export interface GetDraftItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** ID of the catalog item to retrieve from the working catalog. */
        ItemId?: string;

    }

    export interface GetDraftItemResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Full metadata of the catalog item requested. */
        Item?: CatalogItemMetadata;

    }

    export interface GetDraftItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * An opaque token used to retrieve the next page of items created by the caller, if any are available. Should be null on
         * initial request.
         */
        ContinuationToken?: string;
        /** Number of items to retrieve. Maximum page size is 10. */
        Count: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    export interface GetDraftItemsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** An opaque token used to retrieve the next page of items, if any are available. */
        ContinuationToken?: string;
        /** The total number of items created by the caller. */
        Count: number;
        /** A set of items created by the caller. */
        Items?: CatalogItemMetadata[];

    }

    export interface GetInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** Indicates whether to return metadata for virtual currencies */
        ExpandReferencedItems: boolean;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        /** Property bag for receipt generation */
        ReceiptData?: { [key: string]: string | null };
        /** Whether or not to generate a receipt */
        ShouldGenerateReceipt: boolean;

    }

    export interface GetInventoryItemsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        ItemMetadata?: CatalogItemMetadata[];
        Items?: InventoryItemResponseDto[];
        Receipt?: string;
        Subscriptions?: SubscriptionItemResponseDto[];

    }

    export interface GetMyReviewRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The ID of the item to retrieve the user's review for. */
        ItemId?: string;

    }

    export interface GetMyReviewResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The review the user submitted for the requested item. */
        Review?: Review;

    }

    export interface GetPublishedItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** ID of the catalog item to retrieve from the working catalog. */
        ItemId: string;

    }

    export interface GetPublishedItemResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Full metadata of the catalog item requested. */
        Item?: CatalogItemMetadata;

    }

    export interface GetRecipeByFriendlyIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether to expand the referenced items */
        ExpandReferencedItems: boolean;
        /** The friendly Id of target recipe. */
        FriendlyId?: string;
        /** The title or namespace the item is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface GetRecipeByIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether to expand the referenced items */
        ExpandReferencedItems: boolean;
        /** Id of target recipe */
        Id?: string;
        /** The title or namespace the item is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface GetRecipeByMarketplaceOfferIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether to expand the referenced items */
        ExpandReferencedItems: boolean;
        /** The Marketplace offer Id of target recipe. */
        MarketplaceOfferId?: CatalogAlternateId;
        /** The title or namespace the item is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface GetRecipeResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Recipe?: CatalogItemMetadata;
        ReferencedItems?: CatalogItemMetadata[];

    }

    export interface GetReviewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The ID of the item to retrieve reviews for. */
        ItemId?: string;
        /** An OData orderBy used to order the results of the query. */
        OrderBy?: string;
        /** The number of review results to skip. If not specified, defaults to 0. */
        Skip: number;
        /** The number of review results to retrieve. If not specified, defaults to 10. */
        Top: number;

    }

    export interface GetReviewsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** An opaque token used to retrieve the next page of reviews, if any are available. */
        ContinuationToken?: string;
        /** The total number of reviews associated with this item. */
        Count: number;
        /** The paginated set of results. */
        Reviews?: Review[];

    }

    export interface GetStoreByFriendlyIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether to expand the referenced items */
        ExpandReferencedItems: boolean;
        /** The friendly Id of target store. */
        FriendlyId?: string;
        /** The title or namespace the item is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface GetStoreByIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether to expand the referenced items */
        ExpandReferencedItems: boolean;
        /** Id of target store */
        Id?: string;
        /** The title or namespace the item is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface GetStoreResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        ReferencedItems?: CatalogItemMetadata[];
        Store?: CatalogItemMetadata;

    }

    export interface GetSubscriptionByFriendlyIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether to expand the referenced items */
        ExpandReferencedItems: boolean;
        /** The friendly Id of target subscription. */
        FriendlyId?: string;
        /** The title or namespace the item is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface GetSubscriptionByIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether to expand the referenced items */
        ExpandReferencedItems: boolean;
        /** Id of target subscription */
        Id?: string;
        /** The title or namespace the item is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface GetSubscriptionByMarketplaceOfferIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether to expand the referenced items */
        ExpandReferencedItems: boolean;
        /** The Marketplace offer Id of target bundle. */
        MarketplaceOfferId?: CatalogAlternateId;
        /** The title or namespace the item is in. */
        SourceEntityKey?: EntityKey;

    }

    export interface GetSubscriptionResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        ReferencedItems?: CatalogItemMetadata[];
        Subscription?: CatalogItemMetadata;

    }

    export interface GetUgcItemModerationStateRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** ID of the UGC item to get the moderation state for. */
        ItemId?: string;

    }

    export interface GetUgcItemModerationStateResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The current moderation state for the requested item. */
        State?: ModerationState;

    }

    export interface GetVirtualCurrenciesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** Indicates whether to return metadata for virtual currencies */
        ExpandReferencedItems: boolean;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface GetVirtualCurrenciesResult extends PlayFabModule.IPlayFabResultCommon  {
        Currencies?: CurrencyResponseDto[];
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Items?: CatalogItemMetadata[];

    }

    export interface GrantInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        /** A list of Items to modify */
        Items: InventoryItemDetails[];

    }

    export interface GrantInventoryItemsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Items?: InventoryItemResponseDto[];

    }

    export interface HelpfulnessVoteRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        IsHelpful: boolean;
        /** The ID of the review to submit a helpfulness vote for. */
        ReviewId?: string;

    }

    export interface HelpfulnessVoteResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface Image {
        Id?: string;
        /** The optional list of locales that are supported by this image. */
        Locales?: string[];
        /** The client-defined tag associated with this image. */
        Tag?: string;
        /** The client-defined type of this image. */
        Type?: string;
        /** The URL for retrieval of the image. */
        Url?: string;

    }

    export interface InventoryItemDetails {
        AlternateId?: CatalogAlternateId;
        Duration?: string;
        ExpirationDate?: string;
        InstanceId?: string;
        IsSubscription: boolean;
        ItemId?: string;
        LastRefreshDate?: string;
        Marketplace?: string;
        MergeProperties?: boolean;
        NextRecommendedRefreshDate?: string;
        Origin?: string;
        OriginId?: string;
        Properties?: { [key: string]: string | null };
        Quantity: number;

    }

    export interface InventoryItemResponseDto {
        Amount: number;
        ChangedAmount?: number;
        InstanceId?: string;
        ItemId?: string;
        Origin?: string;
        OriginId?: string;
        Properties?: { [key: string]: string | null };
        Receipt?: string;

    }

    export interface KeywordSet {
        /** A list of localized keywords */
        Values?: string[];

    }

    export interface ModerationState {
        /** The date and time this moderation state was last updated. */
        LastModifiedDate?: string;
        /** The current stated reason for the associated item being moderated. */
        Reason?: string;
        /** The current moderation status for the associated item. */
        Status?: string;

    }

    type ModerationStatus = "Unknown"
        | "AwaitingModeration"
        | "Approved"
        | "Rejected";

    export interface PayoutInfo {
        /** The Dev Center account ID of the payee. */
        AccountSellerId?: string;
        /** The tax code for payout calculations. */
        TaxCode?: string;
        /** The Universal account ID of the payee. */
        Uaid?: string;

    }

    export interface PublishItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /**
         * ETag of the catalog item to published from the working catalog to the public catalog. Used for optimistic concurrency.
         * If the provided ETag does not match the ETag in the current working catalog, the request will be reject. If not
         * provided, the current version of the document in the working catalog will be published.
         */
        ETag?: string;
        /** ID of the catalog item to publish from the working catalog to the public catalog. */
        ItemId?: string;

    }

    export interface PublishItemResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    type PublishResult = "Unknown"
        | "Pending"
        | "Succeeded"
        | "Failed"
        | "Canceled";

    export interface PublishStatusRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** ID of the catalog item to publish from the working catalog to the public catalog. */
        ItemId?: string;

    }

    export interface PublishStatusResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Scan results for any items that failed content scans. */
        FailedScanResults?: ScanResult[];
        /** High level state of the publish. */
        Result?: string;
        /** Descriptive message about the current status of the publish. */
        StatusMessage?: string;

    }

    export interface PurchaseItemByFriendlyIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Sets a value indicating whether the purchased item should be automatically consumed. The specified item quantity will be
         * both increased and decreased.
         */
        AutoConsume: boolean;
        /** The currencies used to pay for item. */
        Currencies?: PurchaseItemCurrency[];
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        /** Friendly identifier of the item to purchase. */
        ItemFriendlyId: string;
        /** Additional properties to be associated with purchased item. */
        Properties?: { [key: string]: string | null };
        /** The quantity of the item to purchase. */
        Quantity: number;
        /** Indicates if the full inventory should be returned. */
        ReturnInventory: boolean;
        /** The store to buy the item through. */
        Store?: PurchaseStoreInfo;
        /** The Universal account ID for the creator of the item. */
        Uaid?: string;

    }

    export interface PurchaseItemByIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Sets a value indicating whether the purchased item should be automatically consumed. The specified item quantity will be
         * both increased and decreased.
         */
        AutoConsume: boolean;
        /** The currencies used to pay for item. */
        Currencies?: PurchaseItemCurrency[];
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        /** Unique identifier of the item to purchase. */
        ItemId: string;
        /** Additional properties to be associated with purchased item. */
        Properties?: { [key: string]: string | null };
        /** The quantity of the item to purchase. */
        Quantity: number;
        /** Indicates if the full inventory should be returned. */
        ReturnInventory: boolean;
        /** The store to buy the item through. */
        Store?: PurchaseStoreInfo;
        /** The Universal account ID for the creator of the item. */
        Uaid?: string;

    }

    export interface PurchaseItemCurrency {
        /** The unique identifier of the currency. */
        CurrencyId: string;
        /** Price the client expects to pay for the item. */
        ExpectedPrice: number;

    }

    export interface PurchaseItemResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Details of the currencies used to purchase the items. */
        Currencies?: PurchaseItemResultCurrency[];
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        /** Details of the current inventory items. */
        InventoryItems?: PurchaseItemResultItem[];
        /** Indicates whether the number of inventory items is too large to be returned. */
        InventoryTooLarge: boolean;
        /** Details for the items purchased. */
        PurchasedItems?: PurchaseItemResultItem[];

    }

    export interface PurchaseItemResultCurrency {
        /** The total amount of the currency on inventory. */
        Amount: number;
        /** The amount of the currency used in this call. */
        ChangedAmount: number;
        /** The ID of the currency used in this purchase. */
        CurrencyId?: string;

    }

    export interface PurchaseItemResultItem {
        /** The total amount of the item on inventory. */
        Amount: number;
        /** The amount of the item purchased in this call. */
        ChangedAmount?: number;
        /** Friendly id of the item. */
        FriendlyId?: string;
        /** Unique item identifier for this specific instance of the item. */
        InstanceId?: string;
        /** Unique identifier of the item. */
        ItemId?: string;
        /** The type of item. */
        ItemType?: string;
        /** The properties associated to the currency. */
        Properties?: { [key: string]: string | null };

    }

    export interface PurchaseStoreInfo {
        /** The friendly identifier of the store. */
        FriendlyId?: string;
        /** The unique identifier of the store. */
        Id?: string;

    }

    export interface Rating {
        /** The average rating for this item */
        Average?: number;
        /** The total count of 1 star ratings for this item */
        Count1Star?: number;
        /** The total count of 2 star ratings for this item */
        Count2Star?: number;
        /** The total count of 3 star ratings for this item */
        Count3Star?: number;
        /** The total count of 4 star ratings for this item */
        Count4Star?: number;
        /** The total count of 5 star ratings for this item */
        Count5Star?: number;
        /** The total count of ratings for this item */
        TotalCount?: number;

    }

    export interface ReportItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Category of concern for this report. */
        Concern?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** ID of the item to report. */
        ItemId?: string;
        /** The string reason for this report. */
        Reason?: string;

    }

    export interface ReportItemResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface ReportReviewRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The reason this review is being reported. */
        ConcernCategory?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The ID of the review to submit a report for. */
        ReviewId?: string;

    }

    export interface ReportReviewResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface Review {
        /** The number of negative helpfulness votes for this review. */
        HelpfulNegative: number;
        /** Total number of helpfulness votes for this review. */
        HelpfulnessVotes: number;
        /** The number of positive helpfulness votes for this review. */
        HelpfulPositive: number;
        /** Indicates whether the review author has the item installed. */
        IsInstalled: boolean;
        /** The ID of the item being reviewed. */
        ItemId?: string;
        /** The version of the item being reviewed. */
        ItemVersion?: string;
        /** The locale for which this review was submitted in. */
        Locale?: string;
        /** Star rating associated with this review. */
        Rating: number;
        /** The ID of the author of the review. */
        ReviewerId?: string;
        /** The ID of the review. */
        ReviewId?: string;
        /** The full text of this review. */
        ReviewText?: string;
        /** The date and time this review was last submitted. */
        Submitted: string;
        /** The title of this review. */
        Title?: string;

    }

    export interface ReviewSubmission {
        /** Indicates whether the review author has the item installed. */
        IsInstalled: boolean;
        /** The version of the item being reviewed. */
        ItemVersion?: string;
        /** Star rating associated with this review. */
        Rating: number;
        /** The full text of this review. */
        ReviewText?: string;
        /** The title of this review. */
        Title?: string;

    }

    export interface ReviewSummaryRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The ID of the item to retrieve the reviews summary for. */
        ItemId?: string;

    }

    export interface ReviewSummaryResult extends PlayFabModule.IPlayFabResultCommon  {
        LeastFavorableReview?: Review;
        MostFavorableReview?: Review;
        /** The summary of ratings associated with this item. */
        Rating?: Rating;
        /** The total number of reviews associated with this item. */
        ReviewsCount: number;

    }

    export interface ReviewTakedown {
        /** The ID of the item associated with the review to take down. */
        ItemId?: string;
        /** The ID of the review to take down. */
        ReviewId?: string;

    }

    export interface ScanResult {
        /** The URL of the item which failed the scan */
        Url?: string;

    }

    export interface SearchBundlesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether the referenced items should be expanded. */
        ExpandReferencedItems: boolean;
        /** An OData filter used to refine the search query. */
        Filter?: string;
        /** An OData orderBy used to order the results of the search query. */
        OrderBy?: string;
        /** The text to search for */
        Search?: string;
        /** The number of search results to skip. */
        Skip: number;
        /** The title or namespace to search under. */
        SourceEntityKey?: EntityKey;
        /** The number of search results to retrieve. */
        Top: number;

    }

    export interface SearchBundlesResult extends PlayFabModule.IPlayFabResultCommon  {
        Bundles?: GetBundleResult[];
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface SearchForItemsContainingItemByFriendlyIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Do we want to restrict the Search to Bundles/Subscriptions/Stores? */
        ContainerType?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** FriendlyIds of the items */
        FriendlyIds: string[];
        /** The title or namespace to search under. */
        SourceEntityKey?: EntityKey;

    }

    export interface SearchForItemsContainingItemByIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Do we want to restrict the Search to Bundles/Subscriptions/Stores? */
        ContainerType?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Ids of the items */
        Ids: string[];
        /** The title or namespace to search under. */
        SourceEntityKey?: EntityKey;

    }

    export interface SearchForItemsContainingItemResult extends PlayFabModule.IPlayFabResultCommon  {
        /** List of Bundles containing the item. */
        Bundles?: CatalogItemMetadata[];
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        /** List of Recipes containing the item. */
        Recipes?: CatalogItemMetadata[];
        /** List of Stores containing the item. */
        Stores?: CatalogItemMetadata[];
        /** List of Subscriptions containing the item. */
        Subscriptions?: CatalogItemMetadata[];

    }

    export interface SearchInStoreByFriendlyIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** An OData filter used to refine the search query. */
        Filter?: string;
        /** FriendlyId of target store */
        FriendlyId: string;
        /** An OData orderBy used to order the results of the search query. */
        OrderBy?: string;
        /** The text to search for */
        Search?: string;
        /** The number of search results to skip. */
        Skip: number;
        /** The title or namespace to search under. */
        SourceEntityKey?: EntityKey;
        /** The number of search results to retrieve. */
        Top: number;

    }

    export interface SearchInStoreByIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** An OData filter used to refine the search query. */
        Filter?: string;
        /** Id of target store */
        Id: string;
        /** An OData orderBy used to order the results of the search query. */
        OrderBy?: string;
        /** The text to search for */
        Search?: string;
        /** The number of search results to skip. */
        Skip: number;
        /** The title or namespace to search under. */
        SourceEntityKey?: EntityKey;
        /** The number of search results to retrieve. */
        Top: number;

    }

    export interface SearchInStoreResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        /** List of Items within the Store that satisfy the search condition. */
        Items?: CatalogItemMetadata[];

    }

    export interface SearchRecipesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether the referenced items should be expanded. */
        ExpandReferencedItems: boolean;
        /** An OData filter used to refine the search query. */
        Filter?: string;
        /** An OData orderBy used to order the results of the search query. */
        OrderBy?: string;
        /** The text to search for */
        Search?: string;
        /** The number of search results to skip. */
        Skip: number;
        /** The title or namespace to search under. */
        SourceEntityKey?: EntityKey;
        /** The number of search results to retrieve. */
        Top: number;

    }

    export interface SearchRecipesResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Recipes?: GetRecipeResult[];

    }

    export interface SearchStoresRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether the referenced items should be expanded. */
        ExpandReferencedItems: boolean;
        /** An OData filter used to refine the search query. */
        Filter?: string;
        /** An OData orderBy used to order the results of the search query. */
        OrderBy?: string;
        /** The text to search for */
        Search?: string;
        /** The number of search results to skip. */
        Skip: number;
        /** The title or namespace to search under. */
        SourceEntityKey?: EntityKey;
        /** The number of search results to retrieve. */
        Top: number;

    }

    export interface SearchStoresResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Stores?: GetStoreResult[];

    }

    export interface SearchSubscriptionsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether the referenced items should be expanded. */
        ExpandReferencedItems: boolean;
        /** An OData filter used to refine the search query. */
        Filter?: string;
        /** An OData orderBy used to order the results of the search query. */
        OrderBy?: string;
        /** The text to search for */
        Search?: string;
        /** The number of search results to skip. */
        Skip: number;
        /** The title or namespace to search under. */
        SourceEntityKey?: EntityKey;
        /** The number of search results to retrieve. */
        Top: number;

    }

    export interface SearchSubscriptionsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Subscriptions?: GetSubscriptionResult[];

    }

    export interface SetInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        /** A list of Items to modify */
        Items: InventoryItemDetails[];

    }

    export interface SetInventoryItemsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Items?: InventoryItemResponseDto[];

    }

    export interface SetUgcItemModerationStateRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** ID of the UGC item to set the moderation state for. */
        ItemId?: string;
        /** The reason for the moderation state change for the associated UGC item. */
        Reason?: string;
        /** The status to set for the associated UGC item. */
        Status?: string;

    }

    export interface SetUgcItemModerationStateResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface SetVirtualCurrenciesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** A list of currencies to modify */
        Currencies: CurrencyDetails[];
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface SetVirtualCurrenciesResult extends PlayFabModule.IPlayFabResultCommon  {
        Currencies?: CurrencyResponseDto[];
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface SubscriptionDetails {
        /** The length of time that the subscription will last. */
        DurationInSeconds: number;

    }

    export interface SubscriptionItemResponseDto {
        ExpirationDate?: string;
        ItemIds?: string[];
        LastRefreshDate?: string;
        Marketplace?: string;
        NextRecommendedRefreshDate?: string;
        OfferId?: string;
        Receipt?: string;

    }

    export interface SubtractVirtualCurrenciesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** A list of currencies to modify */
        Currencies: CurrencyDetails[];
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface SubtractVirtualCurrenciesResult extends PlayFabModule.IPlayFabResultCommon  {
        Currencies?: CurrencyResponseDto[];
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface TakedownReviewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The set of reviews to take down. */
        Reviews?: ReviewTakedown[];

    }

    export interface TakedownReviewsResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface UpdateBundleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Bundle details */
        Bundle: CatalogItemMetadata;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface UpdateBundleResult extends PlayFabModule.IPlayFabResultCommon  {
        Bundle?: CatalogItemMetadata;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;

    }

    export interface UpdateCatalogConfigRequest extends PlayFabModule.IPlayFabRequestCommon {
        Config?: CatalogConfig;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    export interface UpdateCatalogConfigResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface UpdateCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Updated metadata describing the currency item to be updated. */
        Currency: CatalogItemMetadata;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    export interface UpdateCurrencyResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Updated metadata describing the currency item just updated. */
        Currency?: CatalogItemMetadata;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    export interface UpdateDraftItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** Updated metadata describing the catalog item to be updated. */
        Item: CatalogItemMetadata;

    }

    export interface UpdateDraftItemResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Updated metadata describing the catalog item just updated. */
        Item?: CatalogItemMetadata;

    }

    export interface UpdateInventoryItemsPropertiesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        /** A list of Items to modify */
        Items: InventoryItemDetails[];

    }

    export interface UpdateInventoryPropertiesItemsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Items?: InventoryItemResponseDto[];
        Subscriptions?: SubscriptionItemResponseDto[];

    }

    export interface UpdateRecipeRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** recipe details */
        Recipe: CatalogItemMetadata;

    }

    export interface UpdateRecipeResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Recipe?: CatalogItemMetadata;

    }

    export interface UpdateStoreRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** Bundle details */
        Store: CatalogItemMetadata;

    }

    export interface UpdateStoreResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Store?: CatalogItemMetadata;

    }

    export interface UpdateSubscriptionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** subscription details */
        Subscription: CatalogItemMetadata;

    }

    export interface UpdateSubscriptionResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Idempotency Id for this request */
        IdempotencyId?: string;
        Subscription?: CatalogItemMetadata;

    }

    export interface UploadInfo {
        /** Name of the file to be uploaded. */
        FileName?: string;
        /** Size of the file to be uploaded, in bytes. */
        FileSize: number;

    }

    export interface UploadUrlMetadata {
        /** Name of the file for which this upload url was requested. */
        FileName?: string;
        /** Unique identifier for the binary content to be uploaded to the target url. */
        Id?: string;
        /** Url for the binary content to be uploaded to. */
        Url?: string;

    }

    export interface UserGeneratedContentSpecificConfig {
        /** The set of content types that will be used for validation and if no values are provided then anything is allowed. */
        ContentTypes?: string[];
        /** Flag defining whether user generated content is enabled. */
        Enabled: boolean;
        /** The set of tags that will be used for validation and if no values are provided then anything is allowed. */
        Tags?: string[];

    }


}
