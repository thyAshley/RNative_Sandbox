import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsList = ({ title, data }) => {
  return (
    <View>
      <Text style={styles.title}>
        {title}, {data.length}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default ResultsList;
