//Example Store using example model
Ext.define('testApp.store.GeoLocation', {
    extend: 'Ext.data.Store',
    config: {
        model: 'testApp.model.GeoLocation',
        data: [
            { userlat: '-123', userlong: '321', address: 'addressone' }
        ]
    }
});