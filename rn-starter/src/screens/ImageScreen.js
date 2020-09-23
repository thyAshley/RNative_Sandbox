import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Beach"
        imageSource={require(`../../assets/beach.jpg`)}
        imageScore={9}
      />
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={7}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
