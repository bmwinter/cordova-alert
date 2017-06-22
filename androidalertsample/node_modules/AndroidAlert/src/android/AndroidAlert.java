package com.androidalert;
import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;

public class AndroidAlert extends CordovaPlugin {

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    if ("myAlert".equals(action)) {
        callbackContext.success();
        return true;
    }
    return false;  // Returning false results in a "MethodNotFound" error.
  }
}
