import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";

import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";

import colors from "../../config/colors";

function OfflineNotice() {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  }
  return null;
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    width: "100%",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
