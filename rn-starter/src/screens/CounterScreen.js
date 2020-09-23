import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Current Count: {count}</Text>
      <Button onPress={() => setCount(count + 1)} title="Increase" />
      <Button
        onPress={() => setCount(count - 1)}
        title="Decrease"
        disabled={count === 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
