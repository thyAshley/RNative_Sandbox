import React from "react";
import { View, Text, Button } from "react-native";

const ColorAdjuster = ({ userColor, onIncrease, onDecrease, value }) => {
  return (
    <View>
      <Text>{userColor}</Text>
      <Button
        title={`Increase ${userColor}`}
        onPress={onIncrease}
        disabled={value >= 255}
      />
      <Button
        title={`Decrease ${userColor}`}
        onPress={onDecrease}
        disabled={value === 0}
      />
    </View>
  );
};

export default ColorAdjuster;
