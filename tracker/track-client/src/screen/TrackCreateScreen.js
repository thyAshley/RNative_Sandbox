import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { NavigationEvents, SafeAreaView } from "react-navigation";

import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import { Context as LocationContext } from "../context/locationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ navigation }) => {
  const [focus, setFocus] = useState(true);
  useEffect(() => {
    const focusSubscriber = navigation.addListener("focus", () => {
      setFocus(true);
    });
    const blurSubscriber = navigation.addListener("blur", () => {
      setFocus(false);
    });

    () => focusSubscriber.remove();
    () => blurSubscriber.remove();
  }, []);

  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(() => {
    addLocation(location, recording);
  }, focus);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create Track</Text>
      <Map />
      {err && <Text>Please Enable Location Services</Text>}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
