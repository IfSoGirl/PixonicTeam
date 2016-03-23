/*
 * File: app/controller/LoginController.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('PixonicTeam.controller.LoginController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.loginController',

    requires: [
        'Ext.Ajax',
        'PixonicTeam.view.ProfilePanel'
    ],

    config: {
        refs: {
            loginPanel: '#loginPanel',
            mainPanel: '#profilePanel'
        },

        control: {
            "[action=login]": {
                tap: 'onLoginButtonTap'
            },
            "[action=logout]": {
                tap: 'onLogOutButtonTap'
            }
        }
    },

    onLoginButtonTap: function(button, e, eOpts) {
        this.startLoginFlow();
    },

    onLogOutButtonTap: function(button, e, eOpts) {
        this.revokeToken();
    },

    launch: function() {
            loginController = this;
            Ext.Viewport.setMasked({xtype:'loadmask',message:'Загружаемся...'});
            var token = localStorage['access_token'];
            console.log('Login controller launch. Storage: access_token., refresh token');
            console.log(localStorage['access_token']);
            console.log(localStorage['refresh_token']);
            if (token) {
                console.log("token exist, validate");
                this.validateToken(token);
            }
            else {
                Ext.Viewport.setMasked(false);
                Ext.getCmp('errorLabel').setHtml('You dont have a token. Please login to Google!');
                this.showLoginElements();
            }


    },

    validateToken: function(token) {
                Ext.Ajax.request({
                url: 'https://www.googleapis.com/oauth2/v3/tokeninfo',
                method: 'GET',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                params: {
                    access_token : token
                },
                disableCaching : false,
                callback: function(options, success, response) {

                    var json = Ext.util.JSON.decode(response.responseText);
                    if (response.status == 200) {
                        Ext.Viewport.setMasked(false);
                        loginController.onLoginSuccess();
                         console.log("Validating token success ");
                    }
                    else  {
                        console.log("Validating token failed, need refresh, refresh token = " + localStorage['refresh_token']);
                        loginController.refreshToken();
                       }
                }
            });
    },

    refreshToken: function() {
        var refresh_token = localStorage['refresh_token'];
        Ext.Ajax.request({
            url: 'https://www.googleapis.com/oauth2/v4/token',
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            disableCaching : false,
            params: {
                refresh_token : refresh_token,
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: 'refresh_token'

            },

            callback: function(options, success, response) {
                console.log('trying to refresh token ' + localStorage['refresh_token']);
                if (response.status == 200) {
                    var json = Ext.util.JSON.decode(response.responseText);
                    console.log('Successfully refreshed token, got new');
                    localStorage.setItem('access_token',json['access_token']);
                    Ext.Viewport.setMasked(false);
                    loginController.onLoginSuccess();
                }
                else {
                    Ext.getCmp('errorLabel').setHtml('Refreshing token '+ localStorage['refresh_token']+' failed');
                    Ext.Viewport.setMasked(false);
                    loginController.showLoginElements();

                }
            }
        });
    },

    startLoginFlow: function() {
                    localStorage.clear();
                    var params = 'client_id=' + encodeURIComponent(clientId);
                    params += '&redirect_uri='+encodeURIComponent(redirectUri);
                    params += '&response_type=code';
                    params += '&access_type=offline';
                    params += '&scope=' + encodeURIComponent(scopes);
                    var authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' + params;
                    console.log('open google window');
                    var win = window.open(authUrl, '_blank', 'location=no,toolbar=no,width=800, height=800');
                    var context = this, url;


                    if ((Ext.os.is.Android) || (Ext.os.is.iOS)) {
                        var callback = function(data) {
                            var pos =  data.url.indexOf(redirectUri);
                            if (pos === 0) {
                                console.log('Close google window');
                                win.removeEventListener('loadstart', callback);
                                win.close();
                                url = data.url;
                                loginController.getAccessCodeFromUrl(url);
                            }
                        };

                        win.addEventListener('loadstart', callback);
                    }
                    else {
                        var repeat = setInterval(function () {
                            var pos = -1;
                            if(!win || !win.document){
                                return;
                            }
                            if (win)
                               pos =  win.document.URL.indexOf(redirectUri);

                            if (pos === 0) {
                                url = win.document.URL;
                                win.close();
                                clearInterval(repeat);
                                loginController.getAccessCodeFromUrl(url);
                            }
                        }, 100);
                    }
    },

    getAccessCodeFromUrl: function(url) {
            var access_code = /\?code=(.+)$/.exec(url)[1];
            var error = /\?error=(.+)$/.exec(url);
            if (access_code) {
                this.getToken(access_code);
            }
    },

    getToken: function(accessCode) {

            Ext.Ajax.request({
                url: 'https://www.googleapis.com/oauth2/v4/token',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: 'POST',
                 disableCaching : false,
                params: {
                    code: accessCode,
                    client_id: clientId,
                    client_secret: clientSecret,
                    redirect_uri: redirectUri,
                    grant_type: 'authorization_code'
                },

                callback: function(options, success, response) {
                    if (response.status != 200) {
                        console.log(response.responseText);
                    }

                    if (response.status == 200 && response.responseText) {
                        var json = Ext.util.JSON.decode(response.responseText);
                        var accessToken = json['access_token'];
                        var refreshToken = json['refresh_token'];
                        localStorage.setItem('access_token',accessToken);
                        localStorage.setItem('refresh_token',refreshToken);
                        loginController.getUserInfo(accessToken, refreshToken);
                    }
                }
            });
    },

    getUserInfo: function(accessToken, refreshToken) {
            Ext.Ajax.request({
                url: 'https://www.googleapis.com/oauth2/v3/userinfo',
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    access_token : accessToken
                },
                 disableCaching : false,
                callback: function(options, success, response) {
                    var json = Ext.util.JSON.decode(response.responseText);
                    localStorage.setItem('email', json['email']);
                    loginController.onLoginSuccess();
                }
            });
    },

    onLoginSuccess: function() {

            mainController.showPanel('profilePanel');
    },

    revokeToken: function() {
            var controller = this;
            localStorage.clear();
            mainController.showPanel('loginPanel');
            /*Ext.Ajax.request({
            url: 'https://accounts.google.com/o/oauth2/revoke',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: 'POST',

            disableCaching : false,

            params: {
                token: localStorage['access_token']
            },

            callback: function(options, success, response) {
                console.log('Revoking token: '+ localStorage['access_token'] + " " +response.status);
                if (response.status != 200) {
                    console.log(response.responseText);
                }

                else {
                    localStorage.clear();
                    controller.showLoginElements();
                }
            }
            });*/

    },

    showLoginElements: function() {
            var btn = Ext.getCmp('loginBtn');
            btn.show();
            var errorLabel = Ext.getCmp('errorLabel');
            errorLabel.hide();
            var helloLabel = Ext.getCmp('helloLabel');
            helloLabel.setHtml('Добро пожаловать в PixonicTeam! Войдите, используя аккаунт @pixonic.ru');
    }

});