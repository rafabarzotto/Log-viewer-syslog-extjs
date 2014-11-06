Ext.define('Log.view.graficos.ChartFromHostPie', {
  extend: 'Ext.window.Window',
  //extend: 'Ext.panel.Panel',
  alias: 'widget.chartfromhostpie',

  autoShow: true,

  maximizable: true,

  items: [{
      xtype: 'chart',
      width: 1200,
      height: 600,
      animate: true,
      store: Ext.create('Log.store.graficos.ChartFromHostPie'),
      shadow: true,
      legend: {
        position: 'right'
      },
      insetPadding: 60,
      theme: 'Base:gradients',
      series: [{
        type: 'pie',
        field: 'Total',
        showInLegend: true,
        tips: {
          trackMouse: true,
          width: 140,
          height: 28,
          renderer: function(storeItem, item) {
            this.setTitle(storeItem.get('FromHost') + ': ' + storeItem.get('Total'));
          }
        },
        highlight: {
          segment: {
            margin: 20
          }
        },
        label: {
          field: 'FromHost',
          display: 'rotate',
          contrast: true,
          font: '18px Arial'
        }
      }]

    }

  ]


});