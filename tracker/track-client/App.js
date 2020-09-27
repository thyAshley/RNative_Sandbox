import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SigninScreen from "./src/screen/SigninScreen";
import SignupScreen from "./src/screen/SignupScreen";

const Auth = createStackNavigator();

const AuthScreen = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen name="login" component={SigninScreen} />
      <Auth.Screen name="signup" component={SignupScreen} />
    </Auth.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <AuthScreen />
    </NavigationContainer>
  );
};
