import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const ColorAdjuster = ({ userColor, setColor, color, value }) => {
  return (
    <View>
      <Text>{userColor}</Text>
      <Button
        title={`Increase ${userColor}`}
        onPress={() => setColor(color + value)}
      />
      <Button
        title={`Decrease ${userColor}`}
        onPress={() => setColor(color - value)}
        disabled={color === 0}
      />
    </View>
  );
};

export default ColorAdjuster;
