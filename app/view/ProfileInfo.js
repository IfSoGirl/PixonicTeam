/*
 * File: app/view/ProfileInfo.js
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

Ext.define('PixonicTeam.view.ProfileInfo', {
    extend: 'Ext.Container',
    alias: 'widget.profileinfo',

    requires: [
        'Ext.Container',
        'Ext.Spacer',
        'Ext.Img',
        'Ext.Label',
        'Ext.Button'
    ],

    config: {
        height: 460,
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        items: [
            {
                xtype: 'container',
                height: 360,
                itemId: 'container',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'spacer',
                        height: 10,
                        itemId: 'spacer',
                        width: 50
                    },
                    {
                        xtype: 'image',
                        height: 300,
                        itemId: 'profilePhoto',
                        width: 300,
                        src: 'http://www.vectortiles.com/wp-content/uploads/sky-and-cloud-patterns-01-300x300.jpg'
                    },
                    {
                        xtype: 'container',
                        itemId: 'profileName',
                        layout: {
                            type: 'vbox',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'spacer',
                                height: 10,
                                itemId: 'spacer3',
                                width: 10
                            },
                            {
                                xtype: 'label',
                                cls: 'list-item-header',
                                height: '30px',
                                html: 'Холин Роман',
                                itemId: 'nameLabel'
                            },
                            {
                                xtype: 'label',
                                cls: [
                                    'post',
                                    'halign-center'
                                ],
                                height: '30px',
                                html: 'Гейм-дизайнер',
                                itemId: 'postLabel'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                height: '100px',
                itemId: 'contactsCnt',
                style: 'border-top: 2px solid rgb(195,195,195); border-bottom: 2px solid rgb(195,195,195);',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            console.log(e.target);
                            var data = button.getData();
                            Ext.getCmp('colleaguePanel').onContactsButtonTap(e.target.className,data);
                        },
                        flex: 1,
                        cls: 'transparent',
                        html: '<div> 	<span style = "font-size: 16px; font-weight: bold"> E-mail: <span class ="mail-url" style="color: blue; font-weight: normal"> {email}</span> </span></br> 	<span style = "font-size: 16px; font-weight: bold"> Телефон: <span class ="phone-url" style="color: blue; font-weight: normal"> {phone}</span> </span></br> 	<span style = "font-size: 16px; font-weight: bold"> Skype: <span class ="skype-url" style="color: blue; font-weight: normal"> {skype}</span> </span></br> 	<span style = "font-size: 16px; font-weight: bold">  Офис: <span style="font-weight: normal; color: rgb(125,125,125)"> {office}</span> </span> </div>',
                        itemId: 'contactsBtn',
                        labelCls: 'contacts-label',
                        text: 'MyButton10'
                    }
                ]
            }
        ]
    },

    setInfo: function(record) {
            var nameLabel =this.down('#profileName').down('#nameLabel');
            nameLabel.setHtml(record.data.name);
            var postLabel =this.down('#profileName').down('#postLabel');
            postLabel.setHtml(record.data.post);

            var contactsCnt = this.down('#contactsCnt');
            var contactsBtn = contactsCnt.down('#contactsBtn');
            var btnHtml = contactsBtn.getHtml();
            btnHtml = btnHtml.replace("{email}",record.data.email);
            btnHtml = btnHtml.replace("{phone}",record.data.phone);
            btnHtml = btnHtml.replace("{skype}",record.data.skype);
            btnHtml = btnHtml.replace("{office}",record.data.office);
            contactsBtn.setHtml(btnHtml);
            contactsBtn.setData({
                "phone" : record.data.phone,
                "email" : record.data.email,
                "skype" : record.data.email
            });
    }

});