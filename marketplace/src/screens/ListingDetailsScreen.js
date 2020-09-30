import React from "react";
import { StyleSheet, View, Image, Platform, StatusBar } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

import ListItem from "../components/ListItem";
export default function ListingDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/jacket.jpg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/mosh.jpg")}
            title="Mosh"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 30,
  },
});
