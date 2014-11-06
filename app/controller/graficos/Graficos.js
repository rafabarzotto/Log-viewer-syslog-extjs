Ext.define('Log.controller.graficos.Graficos', {
    extend: 'Ext.app.Controller',


    views: [
        'graficos.Graficos',
        'graficos.QtdHostsPie',
        'graficos.QtdHostsBar'
      //  'graficos.QtdHostsColumn',
    ],

    stores: [
        'graficos.FromHosts'
    ],

    init: function(application) {
        this.control({
            "graficos": { // Alias GRID!
                render: this.onWindowRender
                //  itemdblclick : this.onEditClick
            },
            "graficos menu#changeType menuitem": {
                click: this.onChangeChart
            },
            "graficos menu#download menuitem": {
                click: this.onChartDownload
            }
        });
    },

    onWindowRender: function(reldatagrid, eOpts) {
        var panel = Ext.ComponentQuery.query('graficos tabpanel > qtdhostspie')[0];
        panel.getStore().load();
    },

    onChangeChart: function(item, e, options) {
        //var panel = item.up('graficos');
        var panel = Ext.ComponentQuery.query('graficos tabpanel')[0];

        if (item.itemId == 'pie'){
            panel.getLayout().setActiveItem(0);
        } else if (item.itemId == 'column'){
            console.log('deu coluna');
            panel.getLayout().setActiveItem(1);
        } else if (item.itemId == 'bar'){
            panel.getLayout().setActiveItem(2);
        }
    },

    onChartDownload: function(item, e, options) {
        //var chart = item.up('graficos').getLayout().getActiveItem();
        var chart = Ext.ComponentQuery.query('graficos tabpanel')[0].getLayout().getActiveItem();

        if (item.itemId == 'png'){
            Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as Image?', function(choice){
                if(choice == 'yes'){
                    chart.save({
                        type: 'image/png'
                    });
                }
            });
        } else if (item.itemId == 'svg'){
            Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as SVG + XML?', function(choice){
                if(choice == 'yes'){
                    chart.save({
                        type: 'image/svg+xml'
                    });
                }
            });
        } else if (item.itemId == 'pdf'){
            Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as PDF?', function(choice){
                if(choice == 'yes'){
                    chart.save({
                        type: 'image/png',
                        url: 'php/pdf/exportChartPdf.php'
                    });
                }
            });
        }
    }
});
