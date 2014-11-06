Ext.define('Log.model.Log', {
    extend: 'Ext.data.Model',
    fields: ['ID', 'DeviceReportedTime', 'SysLogTag', 'Facility', 'Priority', 'FromHost', 'Message']
});