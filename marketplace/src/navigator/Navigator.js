import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingsScreen from "../screens/ListingsScreen";
import AccountScreen from "../screens/AccountScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MessagesScreen from "../screens/MessagesScreen";
import colors from "../config/colors";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import useNotifications from "../hooks/useNotifications";

const AccountStack = createStackNavigator();
const AppTab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const FeedStack = createStackNavigator();

export const AuthStackNavigator = () => (
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

export const AppTabNavigator = () => {
  useNotifications();

  return (
    <AppTab.Navigator tabBarOptions={{ inactiveTintColor: colors.darkgrey }}>
      <AppTab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <AppTab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("ListingEdit")}
            />
          ),
        })}
      />
      <AppTab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

const FeedNavigator = () => (
  <FeedStack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <FeedStack.Screen name="Listings" component={ListingsScreen} />
    <FeedStack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
      options={{ gestureEnabled: true }}
    />
  </FeedStack.Navigator>
);

const AccountNavigator = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen name="Account" component={AccountScreen} />
    <AccountStack.Screen name="Messages" component={MessagesScreen} />
  </AccountStack.Navigator>
);
