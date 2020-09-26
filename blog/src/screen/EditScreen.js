import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlog } = useContext(Context);
  const id = navigation.getParam("id");
  const result = state.find((post) => post.id === id);

  return (
    <BlogPostForm
      initValues={result}
      onSubmit={(title, content) =>
        editBlog(id, title, content, () => navigation.pop())
      }
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
