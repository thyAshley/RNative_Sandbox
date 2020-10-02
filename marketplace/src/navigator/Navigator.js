import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme } from "@react-navigation/native";

import ListingsScreen from "../screens/ListingsScreen";
import AccountScreen from "../screens/AccountScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MessagesScreen from "../screens/MessagesScreen";
import colors from "../config/colors";

const AccountStack = createStackNavigator();
const AppTab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const FeedStack = createStackNavigator();

const AuthStackNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);

const AppTabNavigator = () => (
  <AppTab.Navigator tabBarOptions={{ inactiveTintColor: colors.darkgrey }}>
    <AppTab.Screen name="Feed" component={FeedNavigator} />
    <AppTab.Screen name="ListingEdit" component={ListingEditScreen} />
    <AppTab.Screen name="Account" component={AccountNavigator} />
  </AppTab.Navigator>
);

const FeedNavigator = () => (
  <FeedStack.Navigator mode="modal">
    <FeedStack.Screen name="Listings" component={ListingsScreen} />
    <FeedStack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ gestureEnabled: true, headerShown: false }}
    />
  </FeedStack.Navigator>
);

const AccountNavigator = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen name="Account" component={AccountScreen} />
    <AccountStack.Screen name="Messages" component={MessagesScreen} />
  </AccountStack.Navigator>
);

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: colors.primary,
    primary: colors.primary,
    background: colors.white,
  },
};

export default (
  <NavigationContainer theme={MyTheme}>
    <AppTabNavigator />
  </NavigationContainer>
);
