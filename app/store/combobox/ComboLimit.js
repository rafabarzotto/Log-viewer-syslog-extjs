Ext.define('Log.store.combobox.ComboLimit', {
	extend: 'Ext.data.Store',

	fields: ['Limit'],

	data: [{
		"Limit": "10"
	}, {
		"Limit": "100"
	}, {
		"Limit": "200"
	}, {
		"Limit": "300"
	}, {
		"Limit": "500"
	}, {
		"Limit": "1000"
	}],

	autoLoad: false

});