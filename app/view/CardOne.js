Ext.define('testApp.view.CardOne', {
    extend: 'Ext.navigation.View',
    xtype: 'cardone'
    
    config: {
        title: 'Card One',
        iconCls: 'home',
        
        items: [
            {
                title: 'Card One',
                xtype: 'panel',
                padding: 10,
                html: [
        	     	'Example Card One View in ',
                	'Tab Panel'
               	].join("")
            }
        ]
    }
});