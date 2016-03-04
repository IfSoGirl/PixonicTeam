Ext.define('PixonicTeam.view.ContactsTemplate' ,{   
    extend: 'Ext.XTemplate',
    alias: 'widget.contactstemplate',
    
    html : [
        '<div style="padding:5px 0px 5px 0px; font-size: 16px">',
            '<span style = "font-weight: bold; padding-left: 10px"> E-mail: <a href="mailto:{email}?call" style = "font-weight: normal"> {email}</a></span><br>',
            '<span style = "font-weight: bold; padding-left: 10px"> Телефон: <a href="tel:{[mainController.getNumbersFromPhone(values.phone)]}" style = "font-weight: normal"> {phone}</a></span><br>',
            '<span style = "font-weight: bold; padding-left: 10px"> Skype: <a href="skype:{skype}?call" style = "font-weight: normal"> {skype}</a></span><br>',
            '<span style = "font-weight: bold; padding-left: 10px"> Офис: <span style = "font-weight: normal; color: rgb(140,140,140)"> {office}</span></span>',
         '</div>'
         ],
    
    constructor: function (config) {               
         this.callParent([this.html]);
    },
    
     createNumberToCall : function() {
        var regExp = /\d+/g, phoneDigits = "+7";
        while ((m = regExp.exec(phone)) != null) {
            phoneDigits += m[0];
        }
        return phoneDigits;
    }
});