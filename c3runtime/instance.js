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
                this.sdkKey = properties[0];
            }


            if (typeof this.YabbiAds == 'undefined') {
                return;
            }
            else { };

            const self = this;

            /////////////////////////////////////
            ////// Methods

            // Settings

            const _initialize = async (sdkKey) => {

            }

            // Privacy Methods

            //If the user consents, set the user consent flag to true
            const _setHasUserConsent = async (consent) => {

            }
            const _hasUserConsent = () => {
            };

            // Ads Methods
            const _loadInterstitial = async (INTER_AD_UNIT_ID) => {

            }
            const _showInterstitial = async (INTER_AD_UNIT_ID) => {

            }
            const _isInterstitialReady = (INTER_AD_UNIT_ID) => {

            }

            const _loadRewardedAd = async (REWARDED_AD_UNIT_ID) => {

            }
            const _showRewardedAd = async (REWARDED_AD_UNIT_ID) => {

            }
            const _isRewardedAdReady = (REWARDED_AD_UNIT_ID) => {

            }


            /////////////////////////////////////
            // Register Methods

            this._initialize = _initialize;
            this._setHasUserConsent = _setHasUserConsent;
            this._hasUserConsent = _hasUserConsent;
            this._loadInterstitial = _loadInterstitial;
            this._showInterstitial = _showInterstitial;
            this._isInterstitialReady = _isInterstitialReady;
            this._loadRewardedAd = _loadRewardedAd;
            this._showRewardedAd = _showRewardedAd;
            this._isRewardedAdReady = _isRewardedAdReady;


            /////////////////////////////////////
            // Register Trigger Events

            globalThis.addEventListener('OnInterstitialLoadedEvent', async (adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialLoaded);
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