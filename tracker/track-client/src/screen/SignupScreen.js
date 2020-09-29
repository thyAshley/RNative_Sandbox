import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";

import { Context as AuthContext } from "../context/authContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <Spacer style={styles.container}>
      <AuthForm
        headerTitle="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        btnText="Sign Up"
      />
      <NavLink path="login" text="Already have an account? Sign in here" />
    </Spacer>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 200,
  },
});

export default SignupScreen;
