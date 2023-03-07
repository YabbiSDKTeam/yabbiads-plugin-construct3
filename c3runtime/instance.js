"use strict";
{
    const C3 = self.C3;

    C3.Plugins.yabbi.Instance = class yabbiInstance extends C3.SDKInstanceBase {
        constructor(inst, properties) {
            super(inst);

            this.publisher_id = "";
            this.interstitial_id = "";
            this.rewarded_id = "";

            if (typeof cordova == 'undefined') {
                return;
            }
            else { };

            this.Conditions = C3.Plugins.yabbi.Cnds;
            this.YabbiAds = cordova.require('cordova.plugin.yabbiads');

            if (properties) {
                this.publisher_id = properties[0];
                this.interstitial_id = properties[1];
                this.rewarded_id = properties[2];
            }


            if (typeof this.YabbiAds == 'undefined') {
                return;
            }
            else { };

            const self = this;

            const AdType = {
                INTERSTITIAL: 1, // Interstitial Ad
                REWARDED: 3, // Rewarded Ad
            };


            // Methods

            // Settings
            const _initialize = (PUBLISHER_ID, INTERSTITIAL_ID, REWARDED_ID) => {

                var isInitialized = YabbiAds.isInitialized();

                if (!isInitialized) {
                    self.publisher_id = PUBLISHER_ID;
                    self.interstitial_id = INTERSTITIAL_ID;
                    self.rewarded_id = REWARDED_ID;
                    YabbiAds.initialize(publisher_id, interstitial_id, rewarded_id);
                }
            }

            // Privacy Methods

            const _setUserConsent = (hasConsent) => {
                YabbiAds.setUserConsent(hasConsent);
            }

            const _hasUserConsent = () => {
                return YabbiAds.hasUserConsent();
            };

            // Ads Methods
            const _loadInterstitialAd = () => {
                YabbiAds.loadAd(AdType.INTERSTITIAL);
            }
            const _showInterstitialAd = () => {
                YabbiAds.showAd(AdType.INTERSTITIAL);
            }
            const _isInterstitialAdReady = () => {
                return YabbiAds.canLoadAd(AdType.INTERSTITIAL);
            }
            const _loadRewardedAd = () => {
                YabbiAds.loadAd(AdType.REWARDED);
            }
            const _showRewardedAd = () => {
                YabbiAds.showAd(AdType.REWARDED);
            }
            const _isRewardedAdReady = () => {
                return YabbiAds.canLoadAd(AdType.REWARDED);
            }


            // Register Methods
            this._initialize = _initialize;
            this._setUserConsent = _setUserConsent;
            this._hasUserConsent = _hasUserConsent;
            this._loadInterstitialAd = _loadInterstitialAd;
            this._showInterstitialAd = _showInterstitialAd;
            this._isInterstitialAdReady = _isInterstitialAdReady;
            this._loadRewardedAd = _loadRewardedAd;
            this._showRewardedAd = _showRewardedAd;
            this._isRewardedAdReady = _isRewardedAdReady;


            // Register Trigger Events

            // Interstitial Ad
            globalThis.addEventListener('onInterstitialLoaded', (adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialLoaded);
            });
            globalThis.addEventListener('onInterstitialLoadFailed', (adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialLoadFailed);
            });
            globalThis.addEventListener('onInterstitialShown', (adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialShown);
            });
            globalThis.addEventListener('onInterstitialShowFailed', (adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialShowFailed);
            });
            globalThis.addEventListener('onInterstitialClosed', (adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialClosed);
            });

            // Rewarded Ad
            globalThis.addEventListener('onRewardedLoaded', (adInfo) => {
                self.Trigger(self.Conditions.OnRewardedLoaded);
            });
            globalThis.addEventListener('onRewardedLoadFailed', (adInfo) => {
                self.Trigger(self.Conditions.OnRewardedLoadFailed);
            });
            globalThis.addEventListener('onRewardedShown', (adInfo) => {
                self.Trigger(self.Conditions.OnRewardedShown);
            });
            globalThis.addEventListener('onRewardedShowFailed', (adInfo) => {
                self.Trigger(self.Conditions.OnRewardedShowFailed);
            });
            globalThis.addEventListener('onRewardedClosed', (adInfo) => {
                self.Trigger(self.Conditions.OnRewardedClosed);
            });
            globalThis.addEventListener('onRewardedFinished', (adInfo) => {
                self.Trigger(self.Conditions.OnRewardedFinished);
            });
        }

        Release() {
            super.Release();
        }

        SaveToJson() {
            return {};
        }

        LoadFromJson(o) { }


        GetDebuggerProperties() {
            return [
                {
                    title: "Yabbiads",
                    properties: []
                }
            ];
        }
    };
}