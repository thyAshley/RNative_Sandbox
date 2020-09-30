import React from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/chair.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    left: 30,
    position: "absolute",
    top: 20,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  deleteIcon: {
    position: "absolute",
    right: 30,
    top: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
