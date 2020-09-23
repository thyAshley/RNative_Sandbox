import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
      <ColorAdjuster userColor="Red" color={red} setColor={setRed} value={12} />
      <ColorAdjuster
        userColor="Green"
        color={green}
        setColor={setGreen}
        value={12}
      />
      <ColorAdjuster
        userColor="Blue"
        color={blue}
        setColor={setBlue}
        value={12}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
