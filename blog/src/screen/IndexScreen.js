import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlog, delBlog } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="add blog" onPress={addBlog} />
      <FlatList
        data={state}
        keyExtractor={(state) => state.title}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => delBlog(item.id)}>
              <AntDesign
                style={styles.icon}
                name="delete"
                color="black"
                id={item.id}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    borderColor: "gray",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
