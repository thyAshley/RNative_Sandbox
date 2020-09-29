import React, { useState, useContext } from "react";
import { Input, Button } from "react-native-elements";

import { Context as LocationContext } from "../context/locationContext";
import Spacer from "./Spacer";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          label="name"
          value={name}
          onChangeText={(text) => changeName(text)}
        />
        {recording ? (
          <Button
            title="Stop Recording"
            onPress={stopRecording}
            type="outline"
          />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
    </>
  );
};

export default TrackForm;
