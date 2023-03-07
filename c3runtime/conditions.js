"use strict";
{
    self.C3.Plugins.yabbi.Cnds = {

        OnRewardedLoaded() {
            return true;
        },

        OnRewardedClosed() {
            return true;
        },

        OnRewardedFinished() {
            return true;
        },

        OnRewardedShowFailed() {
            return true;
        },

        OnRewardedShown() {
            return true;
        },

        OnRewardedLoadFailed() {
            return true;
        },

        OnInterstitialLoaded() {
            return true;
        },

        OnInterstitialLoadFailed() {
            return true;
        },

        OnInterstitialShown() {
            return true;
        },

        OnInterstitialShowFailed() {
            return true;
        },

        OnInterstitialClosed() {
            return true;
        },

        IsInterstitialReady() {
            return this._isInterstitialAdReady();
        },

        IsRewardedAdReady() {
            return this._isRewardedAdReady();
        },

        HasUserConsent() {
            return this._hasUserConsent();
        }
    };
}