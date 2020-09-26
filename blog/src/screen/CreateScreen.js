import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlog } = useContext(Context);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(title) => setTitle(title)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.input}
        value={content}
        textAlignVertical="top"
        onChangeText={(content) => setContent(content)}
      />
      <Button
        title="Add Blog post"
        onPress={() =>
          addBlog(title, content, () => {
            navigation.navigate("Index");
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  label: {
    marginLeft: 5,
    fontSize: 20,
    marginBottom: 10,
  },
});

export default CreateScreen;
