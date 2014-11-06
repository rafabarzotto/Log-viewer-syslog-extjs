Ext.define('Log.view.Viewport', {
    extend: 'Ext.container.Viewport',

    alias: 'widget.mainviewport',

    requires: [
        'Ext.layout.container.Fit',
        'Log.view.principal.LogGrid',
        'Log.view.Login'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'
    }]
});