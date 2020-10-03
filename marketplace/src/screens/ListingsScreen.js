import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import AppButton from "../components/AppButton";
import Card from "../components/Card";
import Screen from "../components/SafeScreen";

import colors from "../config/colors";
import routes from "../navigator/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import LotteActivityIndicators from "../components/ActivityIndicator";

export default function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadListing = async () => {
    setLoading(true);
    setHasError(false);

    try {
      const response = await listingsApi.getListings();
      if (response) setListings(response.data);
    } catch (error) {
      setHasError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadListing();
  }, []);

  return (
    <Screen style={styles.screen}>
      {hasError && (
        <Fragment>
          <AppText>Couldn't connect to the server, Please try again</AppText>
          <AppButton title="Retry" onPress={loadListing} />
        </Fragment>
      )}

      <LotteActivityIndicators visible={loading} />
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
