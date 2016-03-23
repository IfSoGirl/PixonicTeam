/*
 * File: app/controller/MainController.js
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

Ext.define('PixonicTeam.controller.MainController', {
    extend: 'Ext.app.Controller',

    requires: [
        'PixonicTeam.view.SlidingMenu',
        'PixonicTeam.view.ProfilePanel',
        'PixonicTeam.view.CalendarPanel'
    ],

    config: {
        control: {
            "[action=menuButtonPressed]": {
                tap: 'onMenuButtonTap'
            },
            "[action=menuItemPressed]": {
                tap: 'onMenuItemPressed'
            },
            "listitem": {
                onListItemTap: 'OnListItemTap'
            }
        }
    },

    onMenuButtonTap: function(button, e, eOpts) {
        var menus = Ext.Viewport.getMenus();
        if (Ext.Viewport.getMenus().left.isHidden()){
            Ext.Viewport.showMenu('left');
        }
        else {
            Ext.Viewport.hideMenu('left');
        }

    },

    onMenuItemPressed: function(button, e, eOpts) {
            var targetPanel;
            switch(button.id){
                case 'profileMenuItem': {
                    targetPanel = 'profilePanel';
                    break;
                }
                case 'calendarMenuItem': {
                    targetPanel = 'calendarPanel';
                    break;
                }
                case 'employeesMenuItem': {
                    targetPanel = 'employeePanel';
                    break;
                }
                case 'logoutMenuItem': {
                    localStorage.clear();
                    targetPanel = 'loginPanel';
                    break;
                }
                default:
                    break;
            }
            console.log('Menu item pressed ' + button.id);

            this.showPanel(targetPanel);
    },

    OnListItemTap: function(listitem) {

    },

    launch: function() {
            mainControllerLaunched = false;
            console.log('Main controller launch');
            mainController = this;
            Ext.Viewport.add(Ext.create('PixonicTeam.view.EmployeesNav'));
            console.log('Employees Nav created');
            Ext.Viewport.setMenu(Ext.create('PixonicTeam.view.SlidingMenu'), {
                side: 'left',
                reveal: false
            });

            Ext.Viewport.add(Ext.create('PixonicTeam.view.CalendarPanel'));
            Ext.create('PixonicTeam.view.ColleaguePanel', {
                title: 'Сотрудники'
            });
            Ext.Viewport.add(Ext.create('PixonicTeam.view.ProfilePanel'));
          /*  mainControllerLaunched = true;
            if (needToShowProfile)
                mainController.showPanel('profilePanel');*/
            loginController.isLoggedIn();
            console.log('Main controllelr launch end');
    },

    showPanel: function(panelName) {
            var tab, title;
            console.log('Controller show panel '+ panelName);
            switch(panelName){
                case 'profilePanel': {
                    tab = Ext.getCmp('profilePanel');
                    console.log('ProfilePanel show');
                    if (!tab.getData()){
                        tab.setData(myRecord);
                    }

                    tab.updateInfo();
                    break;
                }
                case 'calendarPanel': {
                    console.log('Show calendar panel!!!');
                    tab = Ext.getCmp('calendarPanel');
                    break;
                }
                case 'employeePanel': {
                    console.log('Show employee panel!!!');
                    tab = Ext.getCmp('employeeNav');
                    break;
                }

                case 'colleaguePanel': {
                    console.log('Show colleague panel!!!');
                    tab = Ext.getCmp('colleaguePanel');
                    break;
                }
                case 'loginPanel': {
                    tab = Ext.getCmp('loginPanel');
                    loginController.showLoginElements();
                    break;
                }
                default:
                    break;
            }
            console.log('Show panel' + tab.id);

            setTimeout(function () {
            Ext.Viewport.setMasked(false);
            Ext.Viewport.hideMenu('left');
            Ext.Viewport.setActiveItem(tab);
        }, 500);
    },

    parsePhoneForCall: function(phone) {
            var regExp = /\d+/g, phoneDigits = "+7";
            while ((m = regExp.exec(phone)) !== null) {
                phoneDigits += m[0];
            }
            return phoneDigits;
    },

    openUrl: function(url, separateWindow) {
            console.log("Controller open url!" + url);
            if (separateWindow)
                window.open(url, '_system','location=yes,closebuttoncaption=Done');
            else
            location.href = url;

    }

});