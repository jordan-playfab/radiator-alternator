declare module PlayFabAuthenticationModule {
    export interface IPlayFabAuthentication {
        settings: PlayFabModule.IPlayFabSettings;
        // Activates the given API key. Active keys may be used for authentication.
        // https://docs.microsoft.com/rest/api/playfab/authentication/api-keys/activatekey
        ActivateKey(
            request: PlayFabAuthenticationModels.ActivateAPIKeyRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.ActivateAPIKeyResponse> | null,
        ): void;
        // Creates an API key for the given entity.
        // https://docs.microsoft.com/rest/api/playfab/authentication/api-keys/createkey
        CreateKey(
            request: PlayFabAuthenticationModels.CreateAPIKeyRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.CreateAPIKeyResponse> | null,
        ): void;
        // Deactivates the given API key, causing subsequent authentication attempts with it to fail.Deactivating a key is a way to
        // verify that the key is not in use before deleting it.
        // https://docs.microsoft.com/rest/api/playfab/authentication/api-keys/deactivatekey
        DeactivateKey(
            request: PlayFabAuthenticationModels.DeactivateAPIKeyRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.DeactivateAPIKeyResponse> | null,
        ): void;
        // Deletes the given API key.
        // https://docs.microsoft.com/rest/api/playfab/authentication/api-keys/deletekey
        DeleteKey(
            request: PlayFabAuthenticationModels.DeleteAPIKeyRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.DeleteAPIKeyResponse> | null,
        ): void;
        // Method to exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token or to refresh a still valid
        // Entity Token.
        // https://docs.microsoft.com/rest/api/playfab/authentication/authentication/getentitytoken
        GetEntityToken(
            request: PlayFabAuthenticationModels.GetEntityTokenRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.GetEntityTokenResponse> | null,
        ): void;
        // Gets the API keys associated with the given entity.
        // https://docs.microsoft.com/rest/api/playfab/authentication/api-keys/getkeys
        GetKeys(
            request: PlayFabAuthenticationModels.GetAPIKeysRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.GetAPIKeysResponse> | null,
        ): void;
        // Method for a server to validate a client provided EntityToken. Only callable by the title entity.
        // https://docs.microsoft.com/rest/api/playfab/authentication/authentication/validateentitytoken
        ValidateEntityToken(
            request: PlayFabAuthenticationModels.ValidateEntityTokenRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.ValidateEntityTokenResponse> | null,
        ): void;

    }
}

declare module PlayFabAuthenticationModels {
    export interface ActivateAPIKeyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier for the entity API key to activate.
        APIKeyId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
    }

    export interface ActivateAPIKeyResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface CreateAPIKeyDetails {
        // Whether the key is active for authentication. Inactive keys cannot be used to authenticate.Keys can be activated or
        // deactivate using the ActivateKey and DeactivateKey APIs.Deactivating a key is a way to verify that the key is not in use
        // before deleting it.
        Active: boolean;
        // Unique identifier for the entity API key. Set in the "X - EntityAPIKeyId" in authentication requests.
        APIKeyId?: string;
        // Secret used to authenticate requests with the key. Set in the "X - EntityAPIKeyId" in authentication requests.The secret
        // value is returned only once in this response and cannot be retrieved afterward, either via API or in Game Manager.API
        // key secrets should be stored securely only on trusted servers and never distributed in code or configuration to
        // untrusted clients.
        APIKeySecret?: string;
        // The time the API key was generated, in UTC.
        Created: string;
    }

    export interface CreateAPIKeyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
    }

    export interface CreateAPIKeyResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // The created API key
        Key?: CreateAPIKeyDetails;
    }

    export interface DeactivateAPIKeyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier for the entity API key to activate.
        APIKeyId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
    }

    export interface DeactivateAPIKeyResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface DeleteAPIKeyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier for the entity API key to delete.
        APIKeyId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
    }

    export interface DeleteAPIKeyResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface EntityKey {
        // Unique ID of the entity.
        Id: string;
        // Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types
        Type?: string;
    }

    export interface EntityLineage {
        // The Character Id of the associated entity.
        CharacterId?: string;
        // The Group Id of the associated entity.
        GroupId?: string;
        // The Master Player Account Id of the associated entity.
        MasterPlayerAccountId?: string;
        // The Namespace Id of the associated entity.
        NamespaceId?: string;
        // The Title Id of the associated entity.
        TitleId?: string;
        // The Title Player Account Id of the associated entity.
        TitlePlayerAccountId?: string;
    }

    export interface GetAPIKeyDetails {
        // Whether the key is active for authentication. Inactive keys cannot be used to authenticate.Keys can be activated or
        // deactivate using the SetAPIActivation API.Deactivating a key is a way to verify that the key is not in use be before
        // deleting it.
        Active: boolean;
        // Unique identifier for the entity API key. Set in the "X - EntityAPIKeyId" in authentication requests.
        APIKeyId?: string;
        // The time the API key was generated, in UTC.
        Created: string;
    }

    export interface GetAPIKeysRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
    }

    export interface GetAPIKeysResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // The API keys associated with the given entity.
        Keys?: GetAPIKeyDetails[];
    }

    export interface GetEntityTokenRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
    }

    export interface GetEntityTokenResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // The token used to set X-EntityToken for all entity based API calls.
        EntityToken?: string;
        // The time the token will expire, if it is an expiring token, in UTC.
        TokenExpiration?: string;
    }

    type LoginIdentityProvider = "Unknown"
        | "PlayFab"
        | "Custom"
        | "GameCenter"
        | "GooglePlay"
        | "Steam"
        | "XBoxLive"
        | "PSN"
        | "Kongregate"
        | "Facebook"
        | "IOSDevice"
        | "AndroidDevice"
        | "Twitch"
        | "WindowsHello"
        | "GameServer"
        | "CustomServer"
        | "NintendoSwitch"
        | "FacebookInstantGames"
        | "OpenIdConnect"
        | "Apple"
        | "NintendoSwitchAccount";

    export interface ValidateEntityTokenRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // Client EntityToken
        EntityToken: string;
    }

    export interface ValidateEntityTokenResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // The identity provider for this entity, for the given login
        IdentityProvider?: string;
        // The lineage of this profile.
        Lineage?: EntityLineage;
    }

}
