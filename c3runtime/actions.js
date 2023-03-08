"use strict";
{
    self.C3.Plugins.yabbi.Acts = {

        LoadInterstitialAd() {
            this._loadInterstitialAd();
        },

        ShowInterstitialAd() {
            this._showInterstitialAd();
        },

        DestroyInterstitialAd() {
            this._destroyInterstitialAd();
        },

        LoadRewardedAd() {
            this._loadRewardedAd();
        },

        ShowRewardedAd() {
            this._showRewardedAd();
        },

        DestroyRewardedAd() {
            this._destroyRewardedAd();
        },

        Initialize(PUBLISHER_ID, INTERSTITIAL_ID, REWARDED_ID) {
            this._initialize(PUBLISHER_ID, INTERSTITIAL_ID, REWARDED_ID);
        },

        SetUserConsent(hasConsent) {
            this._setUserConsent(hasConsent);
        }
    };
}