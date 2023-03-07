"use strict";
{
    const C3 = self.C3;

    C3.Plugins.yabbi.Instance = class yabbiInstance extends C3.SDKInstanceBase {
        constructor(inst, properties) {
            super(inst);

            if (typeof cordova == 'undefined') {
                return;
            }
            else { };

            this.Conditions = C3.Plugins.yabbi.Cnds;
            this.YabbiAds = cordova.require('cordova.plugin.yabbiads');

            if (properties) {
                // this.sdkKey = properties[0];
            }


            if (typeof this.YabbiAds == 'undefined') {
                return;
            }
            else { };

            const self = this;

            /////////////////////////////////////
            ////// Methods

            // Settings
            const _initialize = async (PUBLISHER_ID, INTERSTITIAL_ID, REWARDED_ID) => {

            }

            // Privacy Methods

            //If the user consents, set the user consent flag to true
            const _setUserConsent = async (hasConsent) => {

            }
            const _hasUserConsent = () => {
            };

            // Ads Methods
            const _loadInterstitialAd = async () => {

            }
            const _showInterstitialAd = async () => {

            }
            const _isInterstitialAdReady = () => {

            }
            const _loadRewardedAd = async () => {

            }
            const _showRewardedAd = async () => {

            }
            const _isRewardedAdReady = () => {

            }


            /////////////////////////////////////
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


            /////////////////////////////////////
            // Register Trigger Events

            // Interstitial Ad
            globalThis.addEventListener('onInterstitialLoaded', async (adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialLoaded);
            });
            globalThis.addEventListener('onInterstitialLoadFailed', async (adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialLoadFailed);
            });
            globalThis.addEventListener('onInterstitialShown', async (adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialShown);
            });
            globalThis.addEventListener('onInterstitialShowFailed', async (adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialShowFailed);
            });
            globalThis.addEventListener('onInterstitialClosed', async (adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialClosed);
            });

            // Rewarded Ad
            globalThis.addEventListener('onRewardedLoaded', async (adInfo) => {
                self.Trigger(self.Conditions.OnRewardedLoaded);
            });
            globalThis.addEventListener('onRewardedLoadFailed', async (adInfo) => {
                self.Trigger(self.Conditions.OnRewardedLoadFailed);
            });
            globalThis.addEventListener('onRewardedShown', async (adInfo) => {
                self.Trigger(self.Conditions.OnRewardedShown);
            });
            globalThis.addEventListener('onRewardedShowFailed', async (adInfo) => {
                self.Trigger(self.Conditions.OnRewardedShowFailed);
            });
            globalThis.addEventListener('onRewardedClosed', async (adInfo) => {
                self.Trigger(self.Conditions.OnRewardedClosed);
            });
            globalThis.addEventListener('onRewardedFinished', async (adInfo) => {
                self.Trigger(self.Conditions.OnRewardedFinished);
            });
        }

        /////////////////////////////////////

        Release() {
            super.Release();
        }

        SaveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        LoadFromJson(o) {
            // load state for savegames
        }


        GetDebuggerProperties() {
            return [
                {
                    title: "yabbiads",
                    properties: [
                        //{name: ".current-animation",	value: this._currentAnimation.GetName(),	onedit: v => this.CallAction(Acts.SetAnim, v, 0) },
                    ]
                }];
        }
    };
}