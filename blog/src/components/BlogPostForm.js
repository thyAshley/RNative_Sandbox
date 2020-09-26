import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const BlogPostForm = ({ onSubmit, initValues }) => {
  const [title, setTitle] = useState(initValues.title);
  const [content, setContent] = useState(initValues.content);
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
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initValues: { title: "", content: "" },
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

export default BlogPostForm;
