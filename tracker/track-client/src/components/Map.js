import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/locationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);
  return currentLocation ? (
    <MapView
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}
    >
      <Circle
        center={currentLocation.coords}
        radius={120}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.2)"
      />
    </MapView>
  ) : (
    <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
