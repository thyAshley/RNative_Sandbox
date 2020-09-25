import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import axios from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);
  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async (id) => {
    const response = await axios.get(`/${id}`);
    setResult(response.data);
  };

  return (
    result && (
      <View>
        <Text>{result.name}</Text>
        <FlatList
          keyExtractor={(photo) => photo}
          data={result.photos}
          renderItem={({ item }) => (
            <Image style={styles.imageStyle} source={{ uri: item }} />
          )}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    width: 250,
  },
});

export default ResultsShowScreen;
