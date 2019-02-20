
package com.chenzhe.navigationview;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNCzNavigationviewModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNCzNavigationviewModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNCzNavigationview";
  }
}