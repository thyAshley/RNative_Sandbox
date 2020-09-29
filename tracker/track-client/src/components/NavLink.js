import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const NavLink = ({ path, text }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(path)}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    marginVertical: 20,
    color: "blue",
  },
});
export default NavLink;
