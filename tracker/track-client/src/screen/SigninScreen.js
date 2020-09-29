import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);

  return (
    <Spacer style={styles.container}>
      <AuthForm
        headerTitle="Sign In to Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        btnText="Sign In"
      />
      <NavLink path="signup" text="Don't have an account? Sign up here!" />
    </Spacer>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 200,
  },
});

export default SigninScreen;
