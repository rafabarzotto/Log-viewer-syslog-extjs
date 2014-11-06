Ext.define('Log.view.graficos.QtdHostsColumn', {
    extend: 'Ext.chart.Chart',
    
    alias: 'widget.qtdhostscolumn',

    animate: true,
    store: 'Log.store.graficos.FromHosts',
    shadow: true,
    insetPadding: 60,
    theme: 'Base:gradients',
    axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['Total'],
        label: {
            renderer: Ext.util.Format.numberRenderer('0,0')
        },
        title: 'Total',
        grid: true,
        minimum: 0
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['FromHost'],
        title: 'Hosts'
    }],
    series: [{
        type: 'column',
        axis: 'left',
        highlight: true,
        tips: {
          trackMouse: true,
          width: 140,
          height: 28,
          renderer: function(storeItem, item) {
            this.setTitle(storeItem.get('FromHost') + ': ' + storeItem.get('Total'));
          }
        },
        label: {
          display: 'insideEnd',
          'text-anchor': 'middle',
            field: 'Total',
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'vertical',
            color: '#333'
        },
        xField: 'FromHost',
        yField: 'Total'
  }]
});