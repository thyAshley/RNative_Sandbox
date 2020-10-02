import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../AppText";
import Icon from "../Icon";

export default function CategoryPickerItem({ onPress, items }) {
  return (
    <View style={styles.container}>
      <Icon background={items.backgroundColor} name={items.icon} size={80} />
      <AppText style={styles.label}>{items.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
