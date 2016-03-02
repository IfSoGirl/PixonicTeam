/*
 * File: app/store/EmployeeStore.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('PixonicTeam.store.EmployeeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'PixonicTeam.model.Employee',
        'Ext.util.Grouper'
    ],

    config: {
        autoLoad: true,
        data: [
            {
                name: 'Ананьев Александр',
                email: 'email@pixonic.ru',
                office: 'Москва',
                post: '2D концепт-художник',
                phone: '(933) 045-1869',
                skype: 'necessitatibus',
                photo: 'http://aimed.spb.ru/images/cms/thumbs/142e21f5603e46b2330254502ddbcabba75dc90f/sperm_80_80_5_80.png?key=api',
                idFacebook: 'aliquam',
                idInstagram: 'et',
                idTwitter: 'assumenda',
                idVKontakte: 'velit',
                holidayBegin: 'est',
                holidayEnd: 'alias',
                regDate: 'saepe',
                info: 'О себе!'
            },
            {
                name: 'Холин Роман',
                email: 'email@pixonic.ru',
                office: 'Белгород',
                post: 'Гейм-дизайнер',
                phone: '(234) 642-3689',
                skype: 'similique',
                photo: 'http://aimed.spb.ru/images/cms/thumbs/142e21f5603e46b2330254502ddbcabba75dc90f/sperm_80_80_5_80.png?key=api',
                idFacebook: 'architecto',
                idInstagram: 'eos',
                idTwitter: 'praesentium',
                idVKontakte: 'aut',
                holidayBegin: 'ratione',
                holidayEnd: 'commodi',
                regDate: 'aut',
                info: 'О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!'
            },
            {
                name: 'Матюха Дарья',
                email: 'email@pixonic.ru',
                office: 'Белгород',
                post: 'Программист',
                phone: '(234) 642-4989',
                skype: 'similique',
                photo: 'http://aimed.spb.ru/images/cms/thumbs/142e21f5603e46b2330254502ddbcabba75dc90f/sperm_80_80_5_80.png?key=api',
                idFacebook: 'architecto',
                idInstagram: 'eos',
                idTwitter: 'praesentium',
                idVKontakte: 'aut',
                holidayBegin: 'ratione',
                holidayEnd: 'commodi',
                regDate: 'aut',
                info: 'О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!О себе!'
            },
            {
                name: 'Ананьев Александр',
                email: 'email@pixonic.ru',
                office: 'Москва',
                post: '2D концепт-художник',
                phone: '(933) 045-1869',
                skype: 'necessitatibus',
                photo: 'http://aimed.spb.ru/images/cms/thumbs/142e21f5603e46b2330254502ddbcabba75dc90f/sperm_80_80_5_80.png?key=api',
                idFacebook: 'aliquam',
                idInstagram: 'et',
                idTwitter: 'assumenda',
                idVKontakte: 'velit',
                holidayBegin: 'est',
                holidayEnd: 'alias',
                regDate: 'saepe'
            },
            {
                name: 'Холин Роман',
                email: 'email@pixonic.ru',
                office: 'Белгород',
                post: 'Гейм-дизайнер',
                phone: '(234) 642-3689',
                skype: 'similique',
                photo: 'http://aimed.spb.ru/images/cms/thumbs/142e21f5603e46b2330254502ddbcabba75dc90f/sperm_80_80_5_80.png?key=api',
                idFacebook: 'architecto',
                idInstagram: 'eos',
                idTwitter: 'praesentium',
                idVKontakte: 'aut',
                holidayBegin: 'ratione',
                holidayEnd: 'commodi',
                regDate: 'aut'
            },
            {
                name: 'Матюха Дарья',
                email: 'email@pixonic.ru',
                office: 'Белгород',
                post: 'Программист',
                phone: '(234) 642-4989',
                skype: 'similique',
                photo: 'http://aimed.spb.ru/images/cms/thumbs/142e21f5603e46b2330254502ddbcabba75dc90f/sperm_80_80_5_80.png?key=api',
                idFacebook: 'architecto',
                idInstagram: 'eos',
                idTwitter: 'praesentium',
                idVKontakte: 'aut',
                holidayBegin: 'ratione',
                holidayEnd: 'commodi',
                regDate: 'aut'
            },
            {
                name: 'Ананьев Александр',
                email: 'email@pixonic.ru',
                office: 'Москва',
                post: '2D концепт-художник',
                phone: '(933) 045-1869',
                skype: 'necessitatibus',
                photo: 'http://aimed.spb.ru/images/cms/thumbs/142e21f5603e46b2330254502ddbcabba75dc90f/sperm_80_80_5_80.png?key=api',
                idFacebook: 'aliquam',
                idInstagram: 'et',
                idTwitter: 'assumenda',
                idVKontakte: 'velit',
                holidayBegin: 'est',
                holidayEnd: 'alias',
                regDate: 'saepe'
            },
            {
                name: 'Ананьев Александр',
                email: 'email@pixonic.ru',
                office: 'Москва',
                post: '2D концепт-художник',
                phone: '(933) 045-1869',
                skype: 'necessitatibus',
                photo: 'http://aimed.spb.ru/images/cms/thumbs/142e21f5603e46b2330254502ddbcabba75dc90f/sperm_80_80_5_80.png?key=api',
                idFacebook: 'aliquam',
                idInstagram: 'et',
                idTwitter: 'assumenda',
                idVKontakte: 'velit',
                holidayBegin: 'est',
                holidayEnd: 'alias',
                regDate: 'saepe'
            },
            {
                name: 'Холин Роман',
                email: 'email@pixonic.ru',
                office: 'Белгород',
                post: 'Гейм-дизайнер',
                phone: '(234) 642-3689',
                skype: 'similique',
                photo: 'http://aimed.spb.ru/images/cms/thumbs/142e21f5603e46b2330254502ddbcabba75dc90f/sperm_80_80_5_80.png?key=api',
                idFacebook: 'architecto',
                idInstagram: 'eos',
                idTwitter: 'praesentium',
                idVKontakte: 'aut',
                holidayBegin: 'ratione',
                holidayEnd: 'commodi',
                regDate: 'aut'
            },
            {
                name: 'Матюха Дарья',
                email: 'email@pixonic.ru',
                office: 'Белгород',
                post: 'Программист',
                phone: '(234) 642-4989',
                skype: 'similique',
                photo: 'http://aimed.spb.ru/images/cms/thumbs/142e21f5603e46b2330254502ddbcabba75dc90f/sperm_80_80_5_80.png?key=api',
                idFacebook: 'architecto',
                idInstagram: 'eos',
                idTwitter: 'praesentium',
                idVKontakte: 'aut',
                holidayBegin: 'ratione',
                holidayEnd: 'commodi',
                regDate: 'aut'
            }
        ],
        model: 'PixonicTeam.model.Employee',
        storeId: 'EmployeeStore',
        grouper: {
            groupFn: function(item) {
                return item.get('name').substr(0, 1);
            },
            sortProperty: 'name'
        },
        listeners: [
            {
                fn: 'onArraystoreLoad',
                event: 'load'
            }
        ]
    },

    onArraystoreLoad: function(store, records, successful, operation, eOpts) {
            //console.log("Store load success? " + successful );
           // console.log(operation);
    }

});