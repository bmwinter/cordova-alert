cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-androidalert.AndroidAlert",
        "file": "plugins/cordova-androidalert/www/AndroidAlert.js",
        "pluginId": "cordova-androidalert",
        "clobbers": [
            "androidalert"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-androidalert": "0.0.1",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});