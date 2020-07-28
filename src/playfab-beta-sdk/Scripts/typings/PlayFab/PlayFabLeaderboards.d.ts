declare module PlayFabLeaderboardsModule {
    export interface IPlayFabLeaderboards {
        settings: PlayFabModule.IPlayFabSettings;
        // Create a new entity statistic definition.
        // https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/createstatisticdefinition
        CreateStatisticDefinition(
            request: PlayFabLeaderboardsModels.CreateStatisticDefinitionRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse> | null,
        ): void;
        // Delete an entity statistic definition. Will delete all statistics on entity profiles and leaderboards.
        // https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/deletestatisticdefinition
        DeleteStatisticDefinition(
            request: PlayFabLeaderboardsModels.DeleteStatisticDefinitionRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse> | null,
        ): void;
        // Delete statistics on an entity profile, will remove all rankings from associated leaderboards.
        // https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/deletestatistics
        DeleteStatistics(
            request: PlayFabLeaderboardsModels.DeleteStatisticsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.DeleteStatisticsResponse> | null,
        ): void;
        // Get the leaderboard for a specific entity type and statistic.
        // https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/getleaderboard
        GetLeaderboard(
            request: PlayFabLeaderboardsModels.GetEntityLeaderboardRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetEntityLeaderboardResponse> | null,
        ): void;
        // Get the leaderboard around a specific entity.
        // https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/getleaderboardaroundentity
        GetLeaderboardAroundEntity(
            request: PlayFabLeaderboardsModels.GetLeaderboardAroundEntityRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetEntityLeaderboardResponse> | null,
        ): void;
        // Get the leaderboard limited to a set of entities.
        // https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/getleaderboardforentities
        GetLeaderboardForEntities(
            request: PlayFabLeaderboardsModels.GetLeaderboardForEntitiesRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetEntityLeaderboardResponse> | null,
        ): void;
        // Get current statistic definition information
        // https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/getstatisticdefinition
        GetStatisticDefinition(
            request: PlayFabLeaderboardsModels.GetStatisticDefinitionRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetStatisticDefinitionResponse> | null,
        ): void;
        // Get all current statistic definitions information
        // https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/getstatisticdefinitions
        GetStatisticDefinitions(
            request: PlayFabLeaderboardsModels.GetStatisticDefinitionsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetStatisticDefinitionsResponse> | null,
        ): void;
        // Increment an entity statistic definition version.
        // https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/incrementstatisticversion
        IncrementStatisticVersion(
            request: PlayFabLeaderboardsModels.IncrementStatisticVersionRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.IncrementStatisticVersionResponse> | null,
        ): void;
        // Update statistics on an entity profile, depending on the statistic definition may cause entity to be ranked on various
        // leaderboards.
        // https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/updatestatistics
        UpdateStatistics(
            request: PlayFabLeaderboardsModels.UpdateStatisticsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.UpdateStatisticsResponse> | null,
        ): void;

    }
}

declare module PlayFabLeaderboardsModels {
    export interface CreateStatisticDefinitionRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Aggregation method for this statistic. Default is Last.
        AggregationMethod?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // Additional configuration options for statistics to be used for leaderboards.
        LeaderboardDefinition?: LeaderboardDefinition;
        // Name of the statistic. Must be less than 50 characters. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.'.
        Name: string;
    }

    export interface DeleteStatisticDefinitionRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // Name of the statistic to delete.
        Name: string;
    }

    export interface DeleteStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // Optional field used for concurrency control. By specifying the previously returned value of ProfileVersion from
        // GetProfile API, you can ensure that the object set will only be performed if the profile has not been updated by any
        // other clients since the version you last loaded.
        ExpectedProfileVersion?: number;
        // Collection of statistics to remove from this entity.
        Statistics: StatisticDelete[];
    }

    export interface DeleteStatisticsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // The current version of the profile, can be used for concurrency control during updates.
        ProfileVersion: number;
        // Updated entity profile statistics.
        Statistics?: { [key: string]: EntityStatisticValue };
    }

    export interface EmptyResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface EntityKey {
        // Unique ID of the entity.
        Id: string;
        // Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types
        Type?: string;
    }

    export interface EntityLeaderboardEntry {
        // Entity's display name.
        DisplayName?: string;
        // Entity identifier.
        Entity?: EntityKey;
        // Custom entity metadata as set during the last UpdateStatistic API call.
        EntityLeaderboardMetadata?: string;
        // Lineage for this entity.
        EntityLineage?: EntityLineage;
        // Statistic or statistic child metadata as set during the UpdateStatistic API call.
        Metadata?: string;
        // Position on the leaderboard.
        Rank: number;
        // Statistic value.
        Score: number;
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

    export interface EntityStatisticChildValue {
        // Child name value, if child statistic
        ChildName?: string;
        // Child statistic metadata
        Metadata?: string;
        // Child statistic value
        Value: number;
    }

    export interface EntityStatisticValue {
        // Child statistic values
        ChildStatistics?: { [key: string]: EntityStatisticChildValue };
        // Statistic metadata
        Metadata?: string;
        // Statistic name
        Name?: string;
        // Statistic value
        Value?: number;
        // Statistic version
        Version: number;
    }

    export interface GetEntityLeaderboardRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Optional child statistic name to filter the leaderboard to.
        ChildName?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // Type of entity to get a leaderboard for.
        EntityType: string;
        // maximum number of results to return from the leaderboard. Minimum 1, maximum 1,000.
        MaxResults: number;
        // Index position to start from. 0 is beginning of leaderboard.
        StartingPosition?: number;
        // Name of the leaderboard statistic.
        StatisticName: string;
        // Optional version of the leaderboard statistic, defaults to current version.
        StatisticVersion?: number;
    }

    export interface GetEntityLeaderboardResponse extends PlayFabModule.IPlayFabResultCommon {
        // Individual entity rankings in the leaderboard, in sorted order by rank.
        Rankings?: EntityLeaderboardEntry[];
        // Version of the leaderboard being returned.
        StatisticVersion: number;
    }

    export interface GetLeaderboardAroundEntityRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Optional statistic child to filter the leaderboard by.
        ChildName?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // Number of ranks above and below the entity to return. If 5 then at most 11 results will be returned, 5 above, the
        // entity, then 5 below. If the entity is at the top then only 6 will be returned, the entity and 5 below.
        Offset: number;
        // Name of the statistic.
        StatisticName: string;
        // Optional version of the statistic, defaults to current.
        StatisticVersion?: number;
    }

    export interface GetLeaderboardForEntitiesRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Optional statistic child name to filter the leaderboard by.
        ChildName?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // Collection of Entity IDs to include in the leaderboard.
        Entities: string[];
        // Entity type of all Entity IDs.
        EntityType: string;
        // Name of the statistic.
        StatisticName: string;
        // Optional version of the statistic, defaults to current.
        StatisticVersion?: number;
    }

    export interface GetStatisticDefinitionRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // Name of the statistic. Must be less than 50 characters.
        Name: string;
    }

    export interface GetStatisticDefinitionResponse extends PlayFabModule.IPlayFabResultCommon {
        // Aggregation method of the statistic.
        AggregationMethod?: string;
        // Created time, in UTC
        Created: string;
        // Last time, in UTC, statistic version was incremented.
        LastResetTime?: string;
        // Statistic leaderboard definition.
        LeaderboardDefinition?: LeaderboardDefinition;
        // Name of the statistic.
        Name?: string;
        // Statistic version.
        Version: number;
    }

    export interface GetStatisticDefinitionsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
    }

    export interface GetStatisticDefinitionsResponse extends PlayFabModule.IPlayFabResultCommon {
        // List of statistic definitions for the title.
        StatisticDefinitions?: StatisticDefinition[];
    }

    export interface IncrementStatisticVersionRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // Name of the statistic to increment the version of.
        Name?: string;
    }

    export interface IncrementStatisticVersionResponse extends PlayFabModule.IPlayFabResultCommon {
        // New statistic version.
        Version: number;
        // Statistic versions and leaderboards to be removed.
        VersionToBeDeleted?: number;
    }

    export interface LeaderboardDefinition {
        // For non-dynamic child leaderboards the statistic child name must be defined to prevent leaderboard length restrictions.
        ChildLeaderboardNames?: string[];
        // Number of entities to rank in a leaderboard when the child is dynamically defined, new entities will not be ranked
        // unless they beat an existing score on a leaderboard. Default 0, Maximum 100.
        DynamicChildLeaderboardMaxSize?: number;
        // Flag to indicate that leaderboards should be created/updated when this statistic is updated on an entity. Default is
        // false.
        ProvisionLeaderboard: boolean;
        // Sort direction of the leaderboard, cannot be changed after creation. Default is Descending
        SortDirection?: string;
    }

    type LeaderboardSortDirection = "Descending"
        | "Ascending";

    type StatisticAggregationMethod = "Last"
        | "Min"
        | "Max"
        | "Sum";

    export interface StatisticDefinition {
        // Aggregation method of the statistic.
        AggregationMethod?: string;
        // Created time, in UTC
        Created: string;
        // Last time, in UTC, statistic version was incremented.
        LastResetTime?: string;
        // Statistic leaderboard definition.
        LeaderboardDefinition?: LeaderboardDefinition;
        // Name of the statistic.
        Name?: string;
        // Statistic version.
        Version: number;
    }

    export interface StatisticDelete {
        // Optionally delete only the child statistic from this entity.
        ChildName?: string;
        // Name of the statistic, as originally configured.
        Name: string;
        // Optional field to indicate the version of the statistic to set. When empty defaults to the statistic's current version.
        Version?: number;
    }

    export interface StatisticUpdate {
        // Arbitrary statistic child name, using child statistics will cause entity to be ranked on only the child leaderboard. See
        // documentation for full details. Must be less than 50 UTF8 encoded characters.
        ChildName?: string;
        // Arbitrary metadata to store along side the statistic or child statistic, will be returned by all Leaderboard APIs. Must
        // be less than 50 UTF8 encoded characters.
        Metadata?: string;
        // Name of the statistic, as originally configured.
        Name: string;
        // Statistic value for the entity. This will be used in accordance with the aggregation method configured for the
        // statistics.
        Value: number;
        // Optional field to indicate the version of the statistic to set. When empty defaults to the statistic's current version.
        Version?: number;
    }

    export interface UpdateStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // Arbitrary metadata to store on the entity that will be returned on all leaderboard APIs. Max length 50 characters.
        EntityLeaderboardMetadata?: string;
        // Optional field used for concurrency control. By specifying the previously returned value of ProfileVersion from
        // GetProfile API, you can ensure that the statistic updates will only be performed if the profile has not been updated by
        // any other clients since the version you last loaded.
        ExpectedProfileVersion?: number;
        // Flag to force the values in the request to bypass the aggregation method and be the new value for the statistic. When
        // empty defaults to false.
        ForceUpdate?: boolean;
        // Collection of statistics to update, maximum 50.
        Statistics: StatisticUpdate[];
    }

    export interface UpdateStatisticsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The entity id and type.
        Entity?: EntityKey;
        // The current version of the profile, can be used for concurrency control during updates.
        ProfileVersion: number;
        // Updated entity profile statistics.
        Statistics?: { [key: string]: EntityStatisticValue };
    }

}
