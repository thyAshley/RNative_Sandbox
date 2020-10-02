import React, { useRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ImageInput from "../ImageInput";

export default function ImageInputList({
  imageUri = [],
  onRemoveImage,
  onAddImage,
}) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUri.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                key={uri}
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
