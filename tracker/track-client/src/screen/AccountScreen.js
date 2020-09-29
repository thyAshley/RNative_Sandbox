import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

import { Context as AuthContext } from "../context/authContext";
const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>Account Screensss</Text>
      <Button title="Sign Out" type="outline" onPress={signOut} />
    </SafeAreaView>
  );
};

export default AccountScreen;
