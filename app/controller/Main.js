Ext.define('testApp.controller.Locate', {
    extend: 'Ext.app.Controller',
    requires: [
    	//example requires
        'Ext.device.Geolocation',
        'Ext.data.JsonP'
    ],
    config: {
        refs: {
        	//example reference to button with action getLatLong
            latLongButton: 'button[action=getLatLong]'
        },
        control: {
        	//example control for above reference for tap event
            latLongButton: {
                tap: 'getPosition'
            }
        }
    }
});