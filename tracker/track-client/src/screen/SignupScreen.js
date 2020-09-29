import React, { Fragment, useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";
import { navigate } from "../utils/navigationRef";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={styles.headerText}>
          Sign Up for Tracker
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
        {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 150,
  },
  headerText: {
    marginBottom: 20,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    padding: 5,
  },
});

export default SignupScreen;
