import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: "row",
    backgroundColor: "#F0EEEE",
    borderRadius: 20,
    height: 50,
    marginHorizontal: 15,
    marginTop: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    alignSelf: "center",
    fontSize: 35,
    marginHorizontal: 15,
  },
});

export default SearchBar;
