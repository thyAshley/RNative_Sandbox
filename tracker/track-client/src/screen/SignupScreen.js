import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";

import { Context as AuthContext } from "../context/authContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearError } = useContext(AuthContext);

  useEffect(() => {
    navigation.addListener("focus", () => clearError());
  }, []);

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
