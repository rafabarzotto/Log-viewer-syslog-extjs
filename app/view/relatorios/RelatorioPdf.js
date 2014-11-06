Ext.define('Log.view.relatorios.RelatorioPdf', {
	extend: 'Ext.window.Window',

	alias: 'widget.relpdf',

	title: 'Relatorio PDF',

	iconCls: 'icon-grid',

	autoShow: true,

	maximizable: true,

	items: [{
		xtype: 'uxiframe',
		width: 200,
		height: 200,
		maximized: true,
		src: 'php/pdf/exportGridPdf.php'
	}]


});