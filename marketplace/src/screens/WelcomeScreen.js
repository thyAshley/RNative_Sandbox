import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";
function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
        <Text style={styles.tagline}>Sell your stuff!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    height: 70,
    width: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
