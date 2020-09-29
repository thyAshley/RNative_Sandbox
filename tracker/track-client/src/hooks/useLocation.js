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
    console.log(shouldTrack);
    if (shouldTrack) startWatching();
    else {
      console.log("removing");
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  const startWatching = async () => {
    try {
      const { status } = await requestPermissionsAsync();
      if (status !== "granted") setErr(true);
      else setErr(null);
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          callback(location);
        }
      );
      setSubscriber(sub);
    } catch (error) {
      setErr(error);
    }
  };

  return [err];
};
