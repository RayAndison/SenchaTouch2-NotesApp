Ext.define('testApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    
    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        defaults: {
        styleHtmlContent: true,
        scrollable: true
        },
        
        items: [
            { xtype: 'cardone' },
            { xtype: 'cardtwo' }
        ]
    }
});