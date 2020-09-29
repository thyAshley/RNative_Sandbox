import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerTitle, errorMessage, onSubmit, btnText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Text h3 style={styles.headerText}>
        {headerTitle}
      </Text>
      <Input
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Button
        title={btnText}
        onPress={() => onSubmit({ email, password })}
        type="outline"
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 20,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    padding: 5,
  },
});

export default AuthForm;
