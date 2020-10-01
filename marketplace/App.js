import React, { useState } from "react";
import { View, TextInput, Text, Switch } from "react-native";

import ViewImageScreen from "./src/screens/ViewImageScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Card from "./src/components/Card";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import Screen from "./src/components/SafeScreen";
import Icon from "./src/components/Icon";
import ListItem from "./src/components/ListItem";
import AccountScreen from "./src/screens/AccountScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
import colors from "./src/config/colors";
import AppTextInput from "./src/components/AppTextInput.js";
import AppPicker from "./src/components/AppPicker.js";

export default function App() {
  return <LoginScreen />;
}
