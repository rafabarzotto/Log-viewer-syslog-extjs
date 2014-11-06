Ext.define('Log.view.principal.LogGrid', {
	//extend: 'Ext.grid.Panel',
	extend: 'Log.ux.grid.LiveSearchGridPanel',
	alias: 'widget.loggrid',

	requires: ['Ext.toolbar.Paging', 'Log.ux.grid.Printer', 'Ext.form.field.Date'

	],

	store: 'Log.store.Logs',

	title: 'SysLog Viewer - TCC - Rafael Barzotto',
	iconCls: 'icon-grid',

	xtype: 'app-main',


	columns: [

		{
			text: 'ID',
			width: 42,
			dataIndex: 'ID'
		},

		{
			text: 'Horario do Evento',
			width: 130,
			dataIndex: 'DeviceReportedTime',
			items: {
				xtype: 'datefield',
				format: 'Y-m-d',
				width: 30,
				//height: 10,
				flex: 1,
				margin: 2,
				enableKeyEvents: true,
				listeners: {
					keyup: function() {
						var store = this.up('loggrid').store;
						store.clearFilter();
						if (this.value) {
							store.filter({
								property: 'DeviceReportedTime',
								value: this.value,
								anyMatch: true,
								caseSensitive: false
							});
						}
					},
					buffer: 500
				}
			}
		},

		{
			text: 'SysLogTag',
			width: 125,
			dataIndex: 'SysLogTag',
			items: {
				xtype: 'textfield',
				width: 30,
				//height: 10,
				flex: 1,
				margin: 2,
				enableKeyEvents: true,
				listeners: {
					keyup: function() {
						var store = this.up('loggrid').store;
						store.clearFilter();
						if (this.value) {
							store.filter({
								property: 'SysLogTag',
								value: this.value,
								anyMatch: true,
								caseSensitive: false
							});
						}
					},
					buffer: 500
				}
			}

		},

		{
			text: 'Facility',
			width: 50,
			dataIndex: 'Facility',
			//renderer: change
		},

		{
			text: 'Prioridade',
			width: 60,
			dataIndex: 'Priority',
			renderer: change
		},

		{
			text: 'Host',
			width: 100,
			dataIndex: 'FromHost',
			items: {
				xtype: 'textfield',
				width: 30,
				//height: 10,
				flex: 1,
				margin: 2,
				enableKeyEvents: true,
				listeners: {
					keyup: function() {
						var store = this.up('loggrid').store;
						store.clearFilter();
						if (this.value) {
							store.filter({
								property: 'FromHost',
								value: this.value,
								anyMatch: true,
								caseSensitive: false
							});
						}
					},
					buffer: 500
				}
			}
		},

		{
			text: 'Evento',
			width: 880,
			dataIndex: 'Message',
			items: {
				xtype: 'textfield',
				width: 30,
				anchor: 50,
				flex: 1,
				margin: 2,
				enableKeyEvents: true,
				listeners: {
					keyup: function() {
						var store = this.up('loggrid').store;
						store.clearFilter();
						if (this.value) {
							store.filter({
								property: 'Message',
								value: this.value,
								anyMatch: true,
								caseSensitive: false
							});
						}
					},
					buffer: 500
				}
			}
		}

	],

	dockedItems: [{

			xtype: 'toolbar',
			dock: 'top',
			//	height: 50,
			defaults: { //aplica em todos os itens
				//anchor: '100%',
				//scale: 'medium',
				labelAlign: 'left'
				//mgsTarget: 'side'
			},

			items: [{
					text: 'Arquivo',
					arrowAlign: 'right',
					iconCls: 'icon-folder',
					itemId: 'arquivo',
					menu: [{
						text: 'Item 1',
					}, {
						text: 'Item 2',
					}, {
						text: 'Item 3'
					}, '-', {
						text: 'Logout',
						id: 'logout',
						iconCls: 'icon-stop',
					}]
				},

				{
					xtype: 'tbspacer',
					width: 3
				},

				{
					text: 'Relatórios',
					arrowAlign: 'right',
					iconCls: 'icon-report',
					id: 'relatorios',
					menu: [{
						text: 'Relatório Por Data',
						id: 'relA',
						iconCls: 'icon-date'
					}, '-', {
						text: 'Graficos',
						id: 'relB',
						iconCls: 'icon-chart'
					}, {
						text: 'Item 4'
					}]
				},

				{
					xtype: 'tbspacer',
					width: 3
				},

				{
					text: 'Opções',
					arrowAlign: 'right',
					iconCls: 'icon-wrench',
					itemId: 'opcoes',
					menu: [{
						text: 'Abrir Cadastro de User',
						id: 'opA',
						iconCls: 'icon-user-add'
					}, {
						text: 'Item 2',
					}, {
						text: 'Item 3'
					}, {
						text: 'Item 4'
					}]
				},

				{
					xtype: 'tbspacer',
					width: 3
				},

				{
					text: 'Ajuda',
					arrowAlign: 'right',
					iconCls: 'icon-help',
					itemId: 'sobre',
					menu: [{
						text: 'Sobre',
					}, {
						text: 'Item 2',
					}, {
						text: 'Item 3'
					}, {
						text: 'Item 4'
					}]
				}

			]

		},

		{

			xtype: 'toolbar',
			dock: 'top',
			items: [{
				xtype: 'button',
				//text: 'Imprimir',
				itemId: 'print',
				iconCls: 'icon-print',
				tooltip: 'Imprimir'

			}, {
				xtype: 'tbseparator'
			}, ]
		},

		{

			xtype: 'toolbar',
			dock: 'bottom',
			items: [


				{
					xtype: 'button',
					text: 'Novo',
					itemId: 'add',
					iconCls: 'icon-add'
				},

				{
					xtype: 'button',
					text: 'Exluir',
					iconCls: 'icon-delete'
				},



			]

		},


		{
			xtype: 'pagingtoolbar',
			store: 'Log.store.Logs', // same store GridPanel is using --- EXEMPLO da documentação
			dock: 'bottom',
			displayInfo: true
		}


	]
});

//funcao colorir
function change(val) {
	if (val > 3) {
		return '<span style="color:green;">' + val + '</span>';
	} else if (val <= 3) {
		return '<span style="color:red;">' + val + '</span>';
	}
	return val;
}