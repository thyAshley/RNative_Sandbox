import React from "react";
import { View, Text, Button } from "react-native";

const ColorAdjuster = ({ userColor, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{userColor}</Text>
      <Button title={`Increase ${userColor}`} onPress={onIncrease} />
      <Button title={`Decrease ${userColor}`} onPress={onDecrease} />
    </View>
  );
};

export default ColorAdjuster;
