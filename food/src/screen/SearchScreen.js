import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ResultsList from "../components/ResultsList";

import SearchBar from "../components/SearchBar";
import useGetBusiness from "../hooks/useGetBusiness";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [results, error, getRestaurants] = useGetBusiness();

  const filterByPrice = (price) => {
    return results.filter((result) => result.price === price);
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
      <ResultsList title="Cost Effective" data={filterByPrice("$")} />
      <ResultsList title="Bit Pricier" data={filterByPrice("$$")} />
      <ResultsList title="Big Spender" data={filterByPrice("$$")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
