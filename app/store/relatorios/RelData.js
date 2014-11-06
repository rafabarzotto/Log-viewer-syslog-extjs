Ext.define('Log.store.relatorios.RelData', {
	extend: 'Ext.data.Store',

	model: 'Log.model.Log',

  // pageSize: 100, // PAGINAGINA MAXIMA

	
	proxy: {
		type: 'ajax',

		url: 'php/relatorios/listaRelatorioData.php',

		reader: {
			type: 'json',
			root: 'logs'
		}
	}

});