Ext.define('Log.controller.Main', {
	extend: 'Ext.app.Controller',

	requires: ['Log.ux.grid.Printer'],

	models: ['Log.model.Log'],

	stores: ['Log.store.Logs'],

	views: ['Log.view.principal.LogGrid'],



	// Funcao Renderizar GRID
	init: function(application) {
		this.control({
			"loggrid": { // Alias GRID!
				render: this.onGridRender
			},

			"loggrid button#opcoes > menu > menuitem#opA": {
				click: this.openUsersGrid
			},

			"loggrid button#relatorios > menu > menuitem#relA":{
				click: this.openRelData
			},

			"loggrid button#relatorios > menu > menuitem#relB":{
				click: this.openGraficos
			},

			"loggrid button#print": {
				click: this.onPrint
			}

		})
	},

	onGridRender: function(loggrid, eOpts) {
		loggrid.getStore().load();
	},

	openUsersGrid: function(btn, eOpts) {
		Ext.create('Log.view.usuarios.UsersGrid');
	},


//RELATORIOS
	openRelData: function(btn, eOpts) {
		Ext.create('Log.view.relatorios.RelatorioDataGrid');
	},

	openGraficos: function(btn, eOpts) {
		Ext.create('Log.view.graficos.Graficos');
	},

//TOOLBAR
	onPrint: function(btn, eOpts) {
		var grid = btn.up('loggrid');
		Log.ux.grid.Printer.printAutomatically = false;
		Log.ux.grid.Printer.print(grid);
	}



	/*onEditClick: function(loggrid, record, item, index, e, eOpts){
		console.log('testse');
		Ext.create('Log.view.usuarios.UsersForm');
	}
	*/



});