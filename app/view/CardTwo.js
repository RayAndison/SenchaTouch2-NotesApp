Ext.define('testApp.view.CardTwo', {
    extend: 'Ext.navigation.View',
    xtype: 'cardtwo'
    
    config: {
        title: 'Card Two',
        iconCls: 'home',
        
        items: [
            {
                title: 'Card Two',
                xtype: 'panel',
                padding: 10,
                html: [
        	     	'Next example card in tab panel two'
               	].join("")
            }
        ]
    }
});