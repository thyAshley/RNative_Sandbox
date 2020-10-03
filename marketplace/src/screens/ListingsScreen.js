import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/SafeScreen";
import axios from "axios";

import colors from "../config/colors";
import routes from "../navigator/routes";
import listingsApi from "../api/listings";

export default function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  const loadListing = async () => {
    try {
      const response = await listingsApi.getListings();
      if (response) setListings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadListing();
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightgrey,
    padding: 20,
  },
});
