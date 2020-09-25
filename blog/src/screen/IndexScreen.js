import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlog } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="add blog" onPress={addBlog} />
      <FlatList
        data={state}
        keyExtractor={(state) => state.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
