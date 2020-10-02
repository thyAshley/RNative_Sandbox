import React, { useEffect, useState } from "react";

import Screen from "./src/components/SafeScreen";
import ImageInput from "./src/components/ImageInput";
import ImageInputList from "./src/components/ImageInputList/Index";

export default function App() {
  const [imageUri, setImageUris] = useState([]);
  const handleAdd = (uri) => {
    setImageUris([...imageUri, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUri.filter((img) => img !== uri));
  };
  return (
    <Screen>
      <ImageInputList
        imageUri={imageUri}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}
