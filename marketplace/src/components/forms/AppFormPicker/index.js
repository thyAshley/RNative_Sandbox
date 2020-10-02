import React, { Fragment } from "react";
import { useFormikContext } from "formik";

import AppPicker from "../../AppPicker";
import ErrorMessage from "../ErrorMessage";

export default function AppFormPicker({
  items,
  name,
  placeholder,
  width,
  PickerItemComponent,
  numberOfColumns = 1,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <Fragment>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </Fragment>
  );
}
