import React from "react";
import { Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>Track List Screen</Text>
      <Button title="Track Details" onPress={() => navigation.push("detail")} />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
