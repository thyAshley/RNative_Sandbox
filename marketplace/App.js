import React, { useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AppTabNavigator, AuthStackNavigator } from "./src/navigator/Navigator";
import OfflineNotice from "./src/components/OfflineNotice";
import AuthContext from "./src/Context/authContext";
import colors from "./src/config/colors";

const App = () => {
  const [user, setUser] = useState(null);
  console.log(user);
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
