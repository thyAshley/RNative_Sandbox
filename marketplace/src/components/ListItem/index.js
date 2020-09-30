import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../../config/colors";
import AppText from "../AppText";

export default function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    borderRadius: 35,
    height: 70,
    marginRight: 10,
    width: 70,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
  },
});
