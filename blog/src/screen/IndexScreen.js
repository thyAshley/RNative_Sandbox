import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context, Provider } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, addBlog, delBlog } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(state) => state.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}
          >
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
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <AntDesign name="plus" size={25} color="black" />
      </TouchableOpacity>
    ),
  };
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
