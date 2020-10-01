import React, { Fragment } from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";

export default function AppForm({
  initValues,
  onSubmit,
  validationSchema,
  children,
}) {
  return (
    <Formik
      initialValues={initValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <Fragment>{children}</Fragment>}
    </Formik>
  );
}

const styles = StyleSheet.create({});
