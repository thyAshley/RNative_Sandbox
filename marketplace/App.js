import React from "react";
import { View } from "react-native";

import ViewImageScreen from "./src/screens/ViewImageScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Card from "./src/components/Card";

export default function App() {
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      <Card
        title="Red Jackets"
        subTitle="$100"
        image={require("./assets/jacket.jpg")}
      />
    </View>
  );
}
