import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AppLoading } from "expo";

import { AppTabNavigator, AuthStackNavigator } from "./src/navigator/Navigator";
import OfflineNotice from "./src/components/OfflineNotice";
import AuthContext from "./src/Context/authContext";
import colors from "./src/config/colors";
import authStorage from "./src/Context/storage";

const App = () => {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={MyTheme}>
        {user ? <AppTabNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: colors.primary,
    primary: colors.primary,
    background: colors.white,
  },
};

export default App;
