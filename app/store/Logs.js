Ext.define('Log.store.Logs', {
    extend: 'Ext.data.Store',

    model: 'Log.model.Log',

    pageSize: 40, // PAGINAGINA MAXIMA

    proxy: {
        type: 'ajax',
        url: 'php/logs/listaLogs.php',
        reader: {
            type: 'json',
            root: 'logs'
        }
    },

    autoLoad: false

});