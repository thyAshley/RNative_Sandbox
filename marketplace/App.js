import React, { useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AppLoading } from "expo";
import navigationRef from "./src/navigator/rootNavigation";

import { AppTabNavigator, AuthStackNavigator } from "./src/navigator/Navigator";
import OfflineNotice from "./src/components/OfflineNotice";
import AuthContext from "./src/Context/authContext";
import colors from "./src/config/colors";
import authStorage from "./src/Context/storage";

import Screen from "./src/components/SafeScreen";
import { Button } from "react-native";
// import { Notifications } from "expo";
import * as Notifications from "expo-notifications";

const App = () => {
  // const [user, setUser] = useState(null);
  // const [isReady, setIsReady] = useState(false);
  // const restoreUser = async () => {
  //   const user = await authStorage.getUser();
  //   if (user) setUser(user);
  // };

  // if (!isReady) {
  //   return (
  //     <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
  //   );
  // }

  const showNotification = () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Look at that notification",
        body: "I'm so proud of myself!",
      },
      trigger: null,
    });
  };

  return (
    <Screen>
      <Button title="Tap me" onPress={showNotification} />
    </Screen>
    // <AuthContext.Provider value={{ user, setUser }}>
    //   <OfflineNotice />
    //   <NavigationContainer ref={navigationRef} theme={MyTheme}>
    //     {user ? <AppTabNavigator /> : <AuthStackNavigator />}
    //   </NavigationContainer>
    // </AuthContext.Provider>
  );
};

// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     text: colors.primary,
//     primary: colors.primary,
//     background: colors.white,
//   },
// };

export default App;
