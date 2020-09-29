import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer = ({ children, style }) => {
  return <View style={{ ...style, ...styles.spacerStyle }}>{children}</View>;
};

const styles = StyleSheet.create({
  spacerStyle: {
    margin: 25,
  },
});

export default Spacer;
