import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AppText from "../AppText";

export default function PickerItem({ onPress, items }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{items.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
