import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import axios from "../api/yelp";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRestaurants("mcdonald");
  }, []);

  const getRestaurants = async (term) => {
    try {
      const response = await axios.get(`/search`, {
        params: {
          term,
          location: "malaysia",
          limit: 50,
        },
      });
      setError(null);
      setResults(response.data.businesses);
    } catch (err) {
      setError("Something went wrong!");
    }
  };

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
