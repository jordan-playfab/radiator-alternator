/* eslint-disable no-throw-literal */
/// <reference path="../typings/PlayFab/PlayFabLeaderboards.d.ts" />

var PlayFab = require("./PlayFab.js");

exports.settings = PlayFab.settings;

exports.CreateStatisticDefinition = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Statistic/CreateStatisticDefinition",
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

exports.DeleteStatisticDefinition = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Statistic/DeleteStatisticDefinition",
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

exports.DeleteStatistics = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Statistic/DeleteStatistics",
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

exports.GetLeaderboard = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Leaderboard/GetLeaderboard",
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

exports.GetLeaderboardAroundEntity = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Leaderboard/GetLeaderboardAroundEntity",
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

exports.GetLeaderboardForEntities = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Leaderboard/GetLeaderboardForEntities",
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

exports.GetStatisticDefinition = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Statistic/GetStatisticDefinition",
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

exports.GetStatisticDefinitions = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Statistic/GetStatisticDefinitions",
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

exports.IncrementStatisticVersion = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Statistic/IncrementStatisticVersion",
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

exports.UpdateStatistics = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Statistic/UpdateStatistics",
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
