import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
  },
});

export default SearchBar;