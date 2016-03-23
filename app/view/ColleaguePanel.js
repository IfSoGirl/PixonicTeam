/*
 * File: app/view/ColleaguePanel.js
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

Ext.define('PixonicTeam.view.ColleaguePanel', {
    extend: 'Ext.Panel',
    alias: 'widget.colleaguepanel',

    requires: [
        'PixonicTeam.view.ProfileInfo',
        'Ext.Panel',
        'Ext.Label',
        'Ext.Img'
    ],

    config: {
        fullscreen: true,
        hidden: false,
        id: 'colleaguePanel',
        layout: 'fit',
        items: [
            {
                xtype: 'panel',
                id: 'mainCnt',
                layout: 'vbox',
                scrollable: 'vertical',
                items: [
                    {
                        xtype: 'profileinfo',
                        id: 'colleagueInfo'
                    },
                    {
                        xtype: 'label',
                        height: '',
                        html: 'Доп. информация:',
                        id: 'infoLabel',
                        minHeight: '30px'
                    },
                    {
                        xtype: 'container',
                        height: '80px',
                        id: 'socialsCnt',
                        style: 'border-top: 2px solid rgb(195,195,195)',
                        layout: {
                            type: 'hbox',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'image',
                                height: 75,
                                id: 'instagramBtn',
                                itemId: 'myimg1',
                                width: 75,
                                src: 'resources/css/images/buttons/insta.active.png'
                            },
                            {
                                xtype: 'image',
                                height: 75,
                                id: 'facebookBtn',
                                itemId: 'myimg2',
                                width: 75,
                                src: 'resources/css/images/buttons/fb.active.png'
                            },
                            {
                                xtype: 'image',
                                height: 75,
                                id: 'vkBtn',
                                itemId: 'myimg4',
                                width: 75,
                                src: 'resources/css/images/buttons/vk.active.png'
                            },
                            {
                                xtype: 'image',
                                height: 75,
                                id: 'twitterBtn',
                                itemId: 'myimg3',
                                style: 'background-repeat: no-repeat',
                                width: 75,
                                src: 'resources/css/images/buttons/twitter.active.png'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onInstagramBtnTap',
                event: 'tap',
                delegate: '#instagramBtn'
            },
            {
                fn: 'onFacebookBtnTap',
                event: 'tap',
                delegate: '#facebookBtn'
            },
            {
                fn: 'onVkBtnTap',
                event: 'tap',
                delegate: '#vkBtn'
            },
            {
                fn: 'onTwitterBtnTap',
                event: 'tap',
                delegate: '#twitterBtn'
            }
        ]
    },

    onInstagramBtnTap: function(image, e, eOpts) {
            this.onSocialButtonTap(image.getData());
    },

    onFacebookBtnTap: function(image, e, eOpts) {
            this.onSocialButtonTap(image.getData());
    },

    onVkBtnTap: function(image, e, eOpts) {
            this.onSocialButtonTap(image.getData());
    },

    onTwitterBtnTap: function(image, e, eOpts) {
                this.onSocialButtonTap(image.getData());
    },

    setInfo: function(record) {
           this.setData(record);

            var contactsPanel = this.down('#mainCnt').down('#colleagueInfo');
            contactsPanel.setInfo(record);

            var infoLabel = Ext.getCmp('infoLabel');
            var infoHtml = '<div style = "padding: 0px 10px 0px 10px"> <span style = "font-weight: bold; ">Доп. информация: <span style = "font-weight: normal; font-size: 14px"> {info}</div>';
            infoLabel.setHtml(infoHtml.replace("{info}",record.data.info));
            this.updateSocialButtons(record);

    },

    onSocialButtonTap: function(data) {
            if (!data)
                return;

            if (!data["id"])
                return;

            var url =  data["id"];
            mainController.openUrl(url, true);
    },

    updateSocialButtons: function(record) {
            var twBtn = Ext.getCmp('twitterBtn');
            twBtn.setData({"id" : record.data.idTwitter});
            var twSrc = "resources/css/images/buttons/twitter.active.png";
            if (!record.data.idTwitter)
                twSrc = twSrc.replace("active","disabled");

            twBtn.setSrc(twSrc);

            var vkBtn = Ext.getCmp('vkBtn');
            vkBtn.setData({"id" : record.data.idVKontakte});
            var vkSrc = "resources/css/images/buttons/vk.active.png";
            if (!record.data.idVKontakte)
                vkSrc = vkSrc.replace("active","disabled");

            vkBtn.setSrc(vkSrc);



            var fbBtn = Ext.getCmp('facebookBtn');
            fbBtn.setData({"id" : record.data.idFacebook});
            var fbSrc = "resources/css/images/buttons/fb.active.png";
            if (!record.data.idFacebook)
                fbSrc = fbSrc.replace("active","disabled");

            fbBtn.setSrc(fbSrc);

            var instBtn = Ext.getCmp('instagramBtn');
            instBtn.setData({"id" : record.data.idInstagram});
            var instSrc = "resources/css/images/buttons/insta.active.png";
            if (!record.data.idInstagram)
                instSrc = instSrc.replace("active","disabled");

            instBtn.setSrc(instSrc);

    },

    onContactsButtonTap: function(targetClass, data) {


            if (targetClass == 'phone-url') {
                        mainController.openUrl("tel:" +mainController.parsePhoneForCall(data['phone']),true);
                        return;
                    }

                    if (targetClass == 'skype-url') {
                        mainController.openUrl("skype:"+data['skype']+"?call",true);
                        return;
                    }

                    if (targetClass == 'mail-url') {
                        mainController.openUrl("mailTo:"+data['email'],true);
                        return;
                    }
    }

});