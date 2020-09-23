import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const ColorScreen = () => {
  const [color, setColor] = useState([]);
  return (
    <View>
      <Button title="Add a Color" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
