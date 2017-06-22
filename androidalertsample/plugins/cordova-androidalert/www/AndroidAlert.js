var exec = require('cordova/exec');

exports.alert = function(arg0, success, error) {
    exec(success, error, "AndroidAlert", "alert", [arg0]);
};
