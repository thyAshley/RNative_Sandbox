import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlog } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) =>
        addBlog(title, content, () => navigation.navigate("Index"))
      }
    />
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
