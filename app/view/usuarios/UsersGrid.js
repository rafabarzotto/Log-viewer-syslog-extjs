Ext.define('Log.view.usuarios.UsersGrid', {
    extend: 'Ext.window.Window',

    alias: 'widget.usersgrid',

    iconCls: 'icon-grid',

    autoShow: true,


    height: 400,
    width: 500,
    title: 'Cadastro de Usuarios',

    items: [{

        xtype: 'gridpanel',
        store: 'Log.store.Usuarios',

        columns: [

            {
                text: 'ID',
                width: 35,
                dataIndex: 'iduser'
            },

            {
                text: 'Nome',
                width: 192,
                dataIndex: 'nome'
            },

            {
                text: 'E-mail',
                width: 250,
                dataIndex: 'email'
            }
        ],

        dockedItems: [{

                xtype: 'toolbar',
                dock: 'top',
                items: [{
                        xtype: 'button',
                        text: 'Novo',
                        itemId: 'add',
                        iconCls: 'icon-add'
                    },

                    {
                        xtype: 'button',
                        text: 'Exluir',
                        itemId: 'delete',
                        iconCls: 'icon-delete'
                    }

                ]

            }

        ]



    }],

    // DENTRO DA WIDOWS / FORA DO GRID
    /*
    dockedItems: [{

            xtype: 'toolbar',
            dock: 'top',
            items: [{
                    xtype: 'button',
                    text: 'Novo',
                    itemId: 'add',
                    iconCls: 'icon-add'
                },

                {
                    xtype: 'button',
                    text: 'Exluir',
                    itemId: 'delete',
                    iconCls: 'icon-delete'
                }


            ]

        },

        {
            xtype: 'pagingtoolbar',
            store: 'Log.store.Usuarios', // same store GridPanel is using --- EXEMPLO da documentação
            dock: 'bottom',
            displayInfo: true
        }
    ]
*/
    dockedItems: [

        {
            xtype: 'pagingtoolbar',
            store: 'Log.store.Usuarios', // same store GridPanel is using --- EXEMPLO da documentação
            dock: 'bottom',
            displayInfo: true
        }

    ]
});