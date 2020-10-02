import React, { Fragment } from "react";
import { StyleSheet } from "react-native";

import { useFormikContext } from "formik";
import AppTextInput from "../../AppTextInput";
import ErrorMessage from "../ErrorMessage";

export default function AppFormField({ name, ...inputProps }) {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <Fragment>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        value={values[name]}
        {...inputProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </Fragment>
  );
}

const styles = StyleSheet.create({});
