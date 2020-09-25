import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import useGetBusiness from "../hooks/useGetBusiness";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [results, error, getRestaurants] = useGetBusiness();
  return (
    <View>
      <SearchBar
        text={searchText}
        setSearchText={setSearchText}
        onSubmit={getRestaurants}
      />
      {error && <Text>{error}</Text>}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
