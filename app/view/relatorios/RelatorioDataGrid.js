Ext.define('Log.view.relatorios.RelatorioDataGrid', {
    extend: 'Ext.window.Window',

    alias: 'widget.reldatagrid',

    title: 'Relatorio por Data',

    iconCls: 'icon-grid',

    autoShow: true,

    width: 200,
    height: 200,
    maximized: true,
       autoScroll : true,
    
    items: [{

        xtype: 'gridpanel',
        store: 'Log.store.relatorios.RelData',

        columns: [

            {
                text: 'ID',
                width: 42,
                dataIndex: 'ID'
            },

            {
                text: 'Horario do Evento',
                width: 150,
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
                            var store = this.up('reldatagrid grid').store;
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
                            var store = this.up('reldatagrid grid').store;
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
                renderer: change
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
                            var store = this.up('reldatagrid grid').store;
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
                            var store = this.up('reldatagrid grid').store;
                            store.clearFilter();
                            if (this.value) {
                                store.filter({
                                    property: 'Message',
                                    width: 650,
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

                xtype: 'form',
                bodyPadding: 10,
                //  bodyStyle: 'background-color: #00CF99',
                height: 50,
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                },

                defaults: { //aplica em todos os itens
                    //anchor: '100%',
                    //scale: 'medium',
                    labelAlign: 'right'
                    //mgsTarget: 'side'
                },

                items: [{
                    xtype: 'datefield',
                  //  fieldStyle: 'background-color: #00CC99',
                    format: 'Y-m-d',
                    anchor: '18%',
                    fieldLabel: 'De',
                    name: 'from_date',
                    maxValue: new Date(), // limited to the current date or prior
                    value: new Date()
                }, {
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    anchor: '18%',
                    fieldLabel: 'Até',
                    name: 'to_date',
                    maxValue: new Date(), // limited to the current date or prior
                    value: new Date() // defaults to today
                }, {
                    xtype: 'combobox',
                    anchor: '20%',
                    fieldLabel: 'Host',
                    emptyText: 'Todos os Hosts',
                    store: 'Log.store.combobox.ComboFromHosts',
                    queryMode: 'local',
                    id: 'fromhostcombo',
                    displayField: 'FromHost',
                    valueField: 'FromHost',
                    editable: false
                }, {
                    xtype: 'combobox',
                    fieldLabel: 'Quantidade',
                    id: 'tolimit',
                    store: 'Log.store.combobox.ComboLimit',
                    queryMode: 'local',
                    displayField: 'Limit',
                    valueField: 'Limit',
                    value: '100',
                    editable: false
                }]
            },


            {

                xtype: 'toolbar',
                dock: 'top',
                items: [{
                        xtype: 'button',
                        text: 'Buscar',
                        itemId: 'buscar',
                        iconCls: 'icon-add'
                    }, {
                        xtype: 'button',
                        text: 'Imprimir',
                        itemId: 'print',
                        iconCls: 'icon-print'

                    }, {
                        xtype: 'button',
                        text: 'Gerar PDF',
                        itemId: 'pdf',
                        iconCls: 'icon-pdf'

                    }

                ]

            }

        ]



    }],



    dockedItems: [

        {
            xtype: 'pagingtoolbar',
            store: 'Log.store.relatorios.RelData',
            dock: 'bottom',
            displayInfo: true
        }

    ]

});

function change(val) {
    if (val > 3) {
        return '<span style="color:green;">' + val + '</span>';
    } else if (val <= 3) {
        return '<span style="color:red;">' + val + '</span>';
    }
    return val;
}