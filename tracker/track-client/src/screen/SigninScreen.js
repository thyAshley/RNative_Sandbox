import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearError } = useContext(AuthContext);

  useEffect(() => {
    navigation.addListener("focus", () => clearError());
  }, []);

  return (
    <View>
      <Spacer style={styles.container}>
        <AuthForm
          headerTitle="Sign In to Tracker"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          btnText="Sign In"
        />
        <NavLink path="signup" text="Don't have an account? Sign up here!" />
      </Spacer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 200,
  },
});

export default SigninScreen;
