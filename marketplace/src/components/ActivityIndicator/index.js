import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function LotteActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        style={styles.loader}
        source={require("../../../assets/animations/968-loading.json")}
        autoPlay
        loop
      />
    </View>
  );
}
export default LotteActivityIndicator;

const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    opacity: 0.7,
    position: "absolute",
  },
  loader: {
    zIndex: 10,
  },
});
