import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Platform } from "react-native";

export default function Screen({ children, style }) {
  return <SafeAreaView style={[styles.safe, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
