import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Signin Screen</Text>
      <TouchableOpacity onPress={() => navigation.push("signup")}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
