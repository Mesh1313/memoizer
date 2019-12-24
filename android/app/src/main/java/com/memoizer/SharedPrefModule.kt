package com.memoizer

import android.content.Context

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class SharedPrefModule constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

  override fun getName(): String {
    return "SharedPrefModule"
  }

  @ReactMethod
  fun getString(key: String, promise: Promise) {
    val sharedPref = currentActivity!!.getPreferences(Context.MODE_PRIVATE)
    val value = sharedPref.getString(key, "TestNativeModule")
    promise.resolve(value)
  }

  @ReactMethod
  fun initialse(key: String, value: String) {
    val sharedPref = currentActivity!!.getPreferences(Context.MODE_PRIVATE)
    val editor = sharedPref.edit()
    editor.putString(key, value)
    editor.apply()
  }

}