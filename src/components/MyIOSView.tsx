import React, {useEffect} from 'react';

import {NativeEventEmitter, NativeModules, View} from 'react-native';
import RTNMyLocation from 'rtn-my-location/js/NativeMyLocation';

const MyIOSView = () => {
  const eventEmitter = new NativeEventEmitter(NativeModules.EventEmitter);

  const getLocation = async () => {
    await RTNMyLocation?.getLocation();
  };

  useEffect(() => {
    getLocation();

    let eventsSubscription = eventEmitter.addListener('onMyEvent', event => {
      console.log({event});
    });

    return () => {
      eventsSubscription.remove();
    };
  }, []);

  return <View />;
};

export default MyIOSView;
