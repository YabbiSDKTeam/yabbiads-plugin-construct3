"use strict";
{
    self.C3.Plugins.yabbi.Acts = {
        LoadRewardedAd() {
            this._loadRewardedAd();
        },

        LoadInterstitialAd() {
            this._loadInterstitialAd();
        },

        ShowRewardedAd() {
            this._showRewardedAd();
        },

        ShowInterstitialAd() {
            this._showInterstitialAd();
        },

        Initialize(PUBLISHER_ID, INTERSTITIAL_ID, REWARDED_ID) {
            this._initialize(PUBLISHER_ID, INTERSTITIAL_ID, REWARDED_ID);
        },

        SetUserConsent(hasConsent) {
            this._setUserConsent(hasConsent);
        }
    };
}