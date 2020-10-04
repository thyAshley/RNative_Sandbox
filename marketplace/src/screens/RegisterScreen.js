import React, { useState, Fragment } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import ActivityIndicator from "../components/ActivityIndicator";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import useAuth from "../hooks/useAuth";
import authApi from "../api/auth";
import axios from "../api/axios";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const auth = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (userInfo) => {
    setLoading(true);
    try {
      const result = await axios.post("/users", {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
      });
      console.log(result);
      if (!result.data) {
        return setError(result.data.error);
      }
      const { data: authToken } = await authApi.login(
        userInfo.email,
        userInfo.password
      );
      auth.logIn(authToken);
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <ActivityIndicator visible={loading} />
      <View style={styles.container}>
        <Form
          initValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </Form>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
