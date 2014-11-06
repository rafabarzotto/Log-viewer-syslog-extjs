Ext.define('Log.store.combobox.ComboFromHosts', {
	extend: 'Ext.data.Store',

	fields: ['FromHost'],

   //pageSize: 10, // PAGINAGINA MAXIMA
	
	proxy: {
		type: 'ajax',
		url: 'php/combobox/listaFromHosts.php',

		reader: {
			type: 'json',
			root: 'data'
		}
	},

	autoLoad: false

});