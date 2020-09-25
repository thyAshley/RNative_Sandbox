import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import axios from "../api/yelp";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  const getRestaurants = async () => {
    const response = await axios.get(`/search`, {
      params: {
        term: searchText,
        location: "malaysia",
        limit: 50,
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar
        text={searchText}
        setSearchText={setSearchText}
        onSubmit={getRestaurants}
      />
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
