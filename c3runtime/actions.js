"use strict";
{
    self.C3.Plugins.yabbi.Acts = {
        async LoadRewardedAd() {
            await this._loadRewardedAd();
        },

        async LoadInterstitialAd() {
            await this._loadInterstitialAd();
        },

        async ShowRewardedAd() {
            await this._showRewardedAd();
        },

        async ShowInterstitialAd() {
            await this._showInterstitialAd();
        },

        async Initialize(PUBLISHER_ID, INTERSTITIAL_ID, REWARDED_ID) {
            await this._initialize(PUBLISHER_ID, INTERSTITIAL_ID, REWARDED_ID);
        },

        async SetUserConsent(hasConsent) {
            await this._setUserConsent(hasConsent);
        }
    };
}