/* eslint-disable no-throw-literal */
/// <reference path="../typings/PlayFab/PlayFabLocalization.d.ts" />

var PlayFab = require("./playfab.js");

exports.settings = PlayFab.settings;

exports.GetLanguageList = function (request, callback) {
  PlayFab.MakeRequest(
    PlayFab.GetServerUrl() + "/Locale/GetLanguageList",
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
