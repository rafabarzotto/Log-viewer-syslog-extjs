Ext.define('Log.view.graficos.QtdHostsBar', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.qtdhostsbar',

    title: 'Grafico Barra',

    animate: true,
    store: 'Log.store.graficos.FromHosts',
    shadow: true,
    insetPadding: 60,
    theme: 'Base:gradients',
    axes: [{
        type: 'Numeric',
        position: 'bottom',
        fields: ['Total'],
        label: {
            renderer: Ext.util.Format.numberRenderer('0,0')
        },
        title: 'Total',
        grid: true,
        minimum: 0
    }, {
        type: 'Category',
        position: 'left',
        fields: ['FromHost'],
        title: 'FromHost'
    }],
    series: [{
        type: 'bar',
        axis: 'bottom',
        highlight: true,
        tips: {
          trackMouse: true,
          width: 140,
          height: 28,
          renderer: function(storeItem, item, attr) {
            this.setTitle(storeItem.get('FromHost') + ': ' + storeItem.get('Total'));
          }
        },
        label: {
          display: 'insideEnd',
          'text-anchor': 'middle',
            field: 'Total',
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'horizontal',
            color: '#333',
            contrast: true
        },
        xField: 'FromHost',
        yField: 'Total'
  }]
});