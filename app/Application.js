Ext.Loader.setConfig({
    enabled: true,
    paths: {
       // 'Ext': 'ext/src'
        //  'ux': 'ux'
    }
});


Ext.define('Log.Application', {
    name: 'Log',

    extend: 'Ext.app.Application',

    requires: ['Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.form.Label',
        'Ext.toolbar.Spacer',
        'Ext.chart.series.Pie',
        'Ext.chart.series.Column',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Login', 'Main', 'usuarios.Users', 'relatorios.RelatorioDataGrid', 'graficos.Graficos'
        // TODO: add controllers here
    ],

    stores: [
        'Log.store.Logs',
        'Log.store.Usuarios',
        'Log.store.relatorios.RelData',
        'Log.store.graficos.FromHosts',
        'Log.store.combobox.ComboFromHosts',
        'Log.store.combobox.ComboLimit'
    ],


    splashscreen: {},


    autoCreateViewport: false,

    init: function() {

        // Start the mask on the body and get a reference to the mask
        splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');

        // Add a new class to this mask as we want it to look different from the default.
        splashscreen.addCls('splashscreen');

        // Insert a new div before the loading icon where we can place our logo.
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });

        //console.log('init');
    },

    launch: function() {

        Ext.tip.QuickTipManager.init();

        var task = new Ext.util.DelayedTask(function() {

            //Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });

            //Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts) {
                        Ext.widget('login');
                    }
                }
            });

            // Ext.widget('mainviewport');
            //Ext.widget('login');

            //console.log('launch');
        });

        task.delay(2000);

    }


});