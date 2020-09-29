import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { NavigationEvents, SafeAreaView } from "react-navigation";

import Map from "../components/Map";
import { Context as LocationContext } from "../context/locationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ navigation }) => {
  const [focus, setFocus] = useState(true);
  useEffect(() => {
    navigation.addListener("focus", () => {
      setFocus(true);
    });
    navigation.addListener("blur", () => {
      setFocus(false);
    });
  }, []);

  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation, focus);
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
