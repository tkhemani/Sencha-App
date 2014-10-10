Ext.define('MyApp.controller.override.NavigationController', {
    override: 'MyApp.controller.NavigationController',


    config: {
        refs: {
            fromTextField: '#fromField',
            toTextField: '#toField',
            amountField: '#amountField'
        },

        control: {
            "fromTextField": {
                focus: 'onfromFieldClick'
            },
            "toTextField": {
                focus: 'ontoFieldClick'
            },
            "amountField": {
                focus: 'onAmountFieldClick'
            }
        }
    },
    onfromFieldClick: function (button, e, options) {
        if (Ext.getCmp(button.id) && Ext.getCmp(Ext.getCmp(button.id).parent.id)) {
            Ext.getCmp(Ext.getCmp(button.id).parent.id).hide();
        }
        Ext.getCmp('fromPanel').show();
    },
    ontoFieldClick: function (button, e, options) {
        if (Ext.getCmp(button.id) && Ext.getCmp(Ext.getCmp(button.id).parent.id)) {
            Ext.getCmp(Ext.getCmp(button.id).parent.id).hide();
        }
        Ext.getCmp('toPanel').show();
    },
    onAmountFieldClick: function (button, e, options) {        
        if (Ext.getCmp(button.id) && Ext.getCmp(Ext.getCmp(button.id).parent.id)) {
            Ext.getCmp(Ext.getCmp(button.id).parent.id).hide();
        }
        Ext.getCmp('amountPanel').show();
    }
});