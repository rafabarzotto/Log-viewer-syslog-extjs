Ext.define('Log.controller.relatorios.RelatorioDataGrid', {
	extend: 'Ext.app.Controller',

	requires: ['Ext.ux.IFrame', 'Ext.form.field.ComboBox'],

	models: ['Log.model.Log'],

	stores: ['Log.store.relatorios.RelData'],

	views: ['Log.view.relatorios.RelatorioDataGrid'],



	// Funcao Renderizar GRID
	init: function(application) {
		this.control({
			"reldatagrid": { // Alias GRID!
				render: this.onWindowRender
				//	itemdblclick : this.onEditClick
			},

			"reldatagrid button#buscar": {
				click: this.onSearchClick
			},

			"reldatagrid button#print": {
				click: this.onPrint
			},

			"reldatagrid button#pdf": {
				click: this.onPdf
			}

		})

	},

	onSearchClick: function(btn, eOpts) {
		var win = btn.up('window'); //pegar window
		var form = win.down('form');
		var values = form.getValues();
		var comboFromHost = Ext.ComponentQuery.query('reldatagrid combobox#fromhostcombo')[0];
		var comboFromHostValue = comboFromHost.getValue();
		var comboTolimit = Ext.ComponentQuery.query('reldatagrid combobox#tolimit')[0];
		var comboToLimitValue = comboTolimit.getValue();
		var record = form.getRecord();
		var grid = Ext.ComponentQuery.query('reldatagrid grid')[0];
		var store = grid.getStore();
		store.pageSize = comboToLimitValue,

		store.load({
			params: {
				from_date: values.from_date,
				to_date: values.to_date,
				from_host: comboFromHostValue,
			}
		});

		console.log(values.from_date);
		console.log(values.to_date);

		Ext.Msg.show({
            title: 'Store Load Callback',
            msg: 'Sucesso!',
            icon: Ext.Msg.INFO,
            buttons: Ext.Msg.OK
        });

		/*
		Ext.Ajax.request({
			url: 'php/relatorios/listaRelatorioData.php', // your url
			method: 'GET',
			params: {
				from_date: values.from_date,
				to_date: values.to_date,
				from_host: values.from
			},
			success: function(result, action) {

				// decode the result and do something with it...
				var jsonData = Ext.decode(result.responseText);

				// do something with returned records    
				var jsonRecords = jsonData.records;

				store.loadRawData(jsonData);
				/*
				success: function() {
					alert('ok'),

				},
				failure: function() {
					alert('not ok')
				}
				
			}
		});
		*/


	},

	onWindowRender: function(reldatagrid, eOpts) {
		var comboFromHost = Ext.ComponentQuery.query('reldatagrid combobox#fromhostcombo')[0];
		comboFromHost.getStore().load();
	},

	onPrint: function(btn, eOpts) {
		var grid = Ext.ComponentQuery.query('reldatagrid grid')[0];
		Log.ux.grid.Printer.printAutomatically = false;
		Log.ux.grid.Printer.print(grid);
	},

	onPdf: function(btn, eOpts) {
		Ext.create('Log.view.relatorios.RelatorioPdf');
	}

	/*
	openRelData: function(btn, eOpts) {
		console.log('Clicou aqui rel');
		Ext.create('Log.view.relatorios.RelatorioDataGrid');
	},

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