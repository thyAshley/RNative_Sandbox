import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    setColors([...colors, `rgb(${red}, ${green}, ${blue})`]);
  };
  return (
    <View>
      <Button title="Add a Color" onPress={randomColor} />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
