import React, { Fragment, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import AppButton from "../components/AppButton";
import Card from "../components/Card";
import Screen from "../components/SafeScreen";

import colors from "../config/colors";
import routes from "../navigator/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import LotteActivityIndicators from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

export default function ListingsScreen({ navigation }) {
  const { data: listings, hasError, loading, request: LoadListing } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    LoadListing();
  }, []);

  return (
    <Fragment>
      <LotteActivityIndicators visible={loading} />
      <Screen style={styles.screen}>
        {hasError && (
          <Fragment>
            <AppText>Couldn't connect to the server, Please try again</AppText>
            <AppButton title="Retry" onPress={LoadListing} />
          </Fragment>
        )}

        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightgrey,
    padding: 20,
  },
});
