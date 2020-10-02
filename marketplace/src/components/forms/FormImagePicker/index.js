import { useFormikContext } from "formik";
import React, { Fragment } from "react";

import ImageInputList from "../../ImageInputList/Index";
import ErrorMessage from "../ErrorMessage";

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((img) => img !== uri)
    );
  };

  return (
    <Fragment>
      <ImageInputList
        imageUri={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </Fragment>
  );
}
