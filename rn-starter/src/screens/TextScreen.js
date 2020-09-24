import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {password.length < 5 && <Text>Password length too short</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
