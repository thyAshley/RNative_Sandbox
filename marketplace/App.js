import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen from "./src/components/SafeScreen";
import { Button, Text } from "react-native";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetail")} />
  );
};

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate("TweetDetail")}
      />
    </Screen>
  );
};

const TweetDetails = () => {
  return (
    <Screen>
      <Text>Tweet Details</Text>
    </Screen>
  );
};

const AppStack = createStackNavigator();
const StackNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Tweets" component={Tweets} />
      <AppStack.Screen name="TweetDetail" component={TweetDetails} />
    </AppStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
