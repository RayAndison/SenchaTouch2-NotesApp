Ext.application({
    name: 'NotesApp',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main',
        'CardOne',
        'CardTwo'
    ],
    
    controllers: [
        'Main'
    ],
    
    models: [
        'Main'
    ],
    
    stores: [
        'Main'
    ],

    launch: function() {
        console.log('Sencha Launched');
        Ext.Viewport.add(Ext.create('NotesApp.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});