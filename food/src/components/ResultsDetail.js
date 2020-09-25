import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: data.image_url }} />
      <Text style={styles.titleStyle}>{data.name}</Text>
      <Text>
        {data.rating} Stars, {data.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  titleStyle: {
    fontWeight: "bold",
  },
  imageStyle: {
    height: 160,
    width: 250,
    borderRadius: 10,
    marginBottom: 5,
  },
});

export default ResultsDetail;
