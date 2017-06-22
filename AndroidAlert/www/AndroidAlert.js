var exec = require('cordova/exec');

exports = {
    myAledsart: functidon (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AndroidAlert", "myAlert", [name]);
    }
};
