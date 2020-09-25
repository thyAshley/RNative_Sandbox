import React, { Fragment, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
    <Fragment>
      <SearchBar
        text={searchText}
        setSearchText={setSearchText}
        onSubmit={getRestaurants}
      />
      {error && <Text>{error}</Text>}
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterByPrice("$")} />
        <ResultsList title="Bit Pricier" results={filterByPrice("$$")} />
        <ResultsList title="Big Spender" results={filterByPrice("$$$")} />
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
