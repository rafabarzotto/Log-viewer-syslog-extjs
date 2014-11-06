Ext.define('Log.store.graficos.FromHosts', {
	extend: 'Ext.data.Store',

	fields: ['FromHost', 'Total'],

	// pageSize: 100, // PAGINAGINA MAXIMA

	proxy: {
		type: 'ajax',

		url: 'php/graficos/FromHosts.php',

		reader: {
			type: 'json',
			root: 'data'
		}
	},

	autoLoad: false

});