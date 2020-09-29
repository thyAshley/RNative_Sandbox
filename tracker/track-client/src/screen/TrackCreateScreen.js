import React, { useEffect, useState, useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

import Map from "../components/Map";

import { Context as LocationContext } from "../context/locationContext";

// import "../utils/mockLocation";

const TrackCreateScreen = ({ navigation }) => {
  const [err, setErr] = useState(null);
  const { addLocation } = useContext(LocationContext);
  useEffect(() => {
    startWatching();
  }, []);

  const startWatching = async () => {
    try {
      const { status } = await requestPermissionsAsync();
      if (status !== "granted") setErr(true);
      else setErr(null);
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
    } catch (error) {
      setErr(error);
    }
  };
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create Track</Text>
      <Map />
      {err && <Text>Please Enable Location Services</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
