import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SigninScreen from "./src/screen/SigninScreen";
import SignupScreen from "./src/screen/SignupScreen";
import TrackCreateScreen from "./src/screen/TrackCreateScreen";
import TrackDetailScreen from "./src/screen/TrackDetailScreen";
import TrackListScreen from "./src/screen/TrackListScreen";
import AccountScreen from "./src/screen/AccountScreen";
import { Provider as AuthProvider } from "./src/context/authContext";
import { Provider as LocationProvider } from "./src/context/locationContext";
import { setNavigator } from "./src/utils/navigationRef";
import ResolveAuth from "./src/screen/ResolveAuth";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="resolve">
      <Stack.Screen
        name="resolve"
        component={ResolveAuth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={SigninScreen}
        options={{ title: "Log In", headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="track"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const TrackStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="list">
      <Stack.Screen name="detail" component={TrackDetailScreen} />
      <Stack.Screen name="list" component={TrackListScreen} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="detail">
      <Tab.Screen name="detail" component={TrackStackNavigator} />
      <Tab.Screen name="create" component={TrackCreateScreen} />
      <Tab.Screen name="account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <NavigationContainer
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        >
          <MainStackNavigator />
        </NavigationContainer>
      </AuthProvider>
    </LocationProvider>
  );
};
