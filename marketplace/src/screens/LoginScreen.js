import React, { Fragment } from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton/index.js";
import AppTextInput from "../components/AppTextInput.js";
import Screen from "../components/SafeScreen";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage.js";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("* Email is required").email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, values }) => (
          <Fragment>
            <AppTextInput
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              value={values.email}
            />
            <ErrorMessage error={errors.email} />
            <AppTextInput
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
              value={values.password}
            />
            <ErrorMessage error={errors.password} />
            <AppButton title="Login" onPress={handleSubmit} />
          </Fragment>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    alignSelf: "center",
    height: 80,
    marginBottom: 20,
    marginTop: 50,
    width: 80,
  },
});
