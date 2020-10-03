import React from "react";
import LottieView from "lottie-react-native";

function LotteActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      source={require("../../../assets/animations/968-loading.json")}
      autoPlay
      loop
    />
  );
}
export default LotteActivityIndicator;
