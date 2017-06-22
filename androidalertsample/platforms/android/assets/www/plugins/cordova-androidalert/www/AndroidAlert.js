cordova.define("cordova-androidalert.AndroidAlert", function(require, exports, module) {
var exec = require('cordova/exec');

module.exports = {
    myAlert: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AndroidAlert", "myAlert", [name]);
    }
};

});
