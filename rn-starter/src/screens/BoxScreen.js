import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textStyleOne} />
      <View style={styles.viewTwoParent}>
        <View style={styles.textStyleTwo} />
      </View>
      <View style={styles.textStyleThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: 100,
  },
  viewTwoParent: {
    height: 100,
    justifyContent: "flex-end",
  },
  textStyleOne: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  textStyleTwo: {
    height: 50,
    width: 50,
    backgroundColor: "green",
  },
  textStyleThree: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
