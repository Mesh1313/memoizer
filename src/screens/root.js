import React, { useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import RootNavigator from '../router';
import SharedPref from '../SharedPref';

const RootScreen = () => {

  useEffect(() => {
    SharedPref.initialse("test", "Hello");
    SharedPref.getString("test")
      .then((result) => ToastAndroid.show(result, ToastAndroid.LONG));
  }, []);

  return (
    <RootNavigator />
  );
}

export default RootScreen;