package com.example.plugin;
import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;

public class AndroidAlert extends CordovaPlugin {

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    if ("alert".equals(action)) {
        callbackContext.success();
        return true;
    }
    return false;  // Returning false results in a "MethodNotFound" error.
  }
}
