import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (callback, shouldTrack) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  useEffect(() => {
    console.log("watching", shouldTrack);
    if (shouldTrack) startWatching();
    else {
      if (subscriber) {
        subscriber.remove();
        setSubscriber(null);
      }
    }
  }, [shouldTrack]);

  const startWatching = async () => {
    try {
      console.log("start watching");
      const { status } = await requestPermissionsAsync();
      if (status !== "granted") setErr(true);
      else setErr(null);
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      setSubscriber(sub);
    } catch (error) {
      setErr(error);
    }
  };

  return [err];
};
