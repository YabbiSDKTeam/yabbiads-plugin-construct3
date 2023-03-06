"use strict";
{
    self.C3.Plugins.yabbi.Cnds = {

        OnRewardedAdReceivedReward() {
            return true;
        },

        OnRewardedAdHidden() {
            return true;
        },

        OnRewardedAdFailedToDisplay() {
            return true;
        },

        OnRewardedAdDisplayed() {
            return true;
        },

        OnRewardedAdClicked() {
            return true;
        },

        OnRewardedAdLoadFailed() {
            return true;
        },

        OnRewardedAdLoaded() {
            return true;
        },

        OnInterstitialLoaded() {
            return true;
        },

        OnInterstitialLoadFailed() {
            return true;
        },

        OnInterstitialClicked() {
            return true;
        },

        OnInterstitialDisplayed() {
            return true;
        },

        OnInterstitialAdFailedToDisplay() {
            return true;
        },

        OnInterstitialHidden() {
            return true;
        },

        isInterstitialReady(INTER_AD_UNIT_ID) {
            return this._isInterstitialReady(INTER_AD_UNIT_ID);
        },

        isRewardedAdReady(REWARDED_AD_UNIT_ID) {
            return this._isRewardedAdReady(REWARDED_AD_UNIT_ID);
        },

        hasUserConsent() {
            return this._hasUserConsent();
        },
    };
}