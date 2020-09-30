import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from "react-native";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.safeview}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeview: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
