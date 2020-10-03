import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import colors from "../config/colors";

export default function UploadScreen({
  progress = 0,
  visible = false,
  onDone,
}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            width={200}
            color={colors.primary}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            source={require("../../assets/animations/done.json")}
            style={{ width: 400, height: 400 }}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    height: 250,
    width: 250,
  },
  container: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});
