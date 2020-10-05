import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permission from "expo-permissions";

import pushTokenApi from "../api/pushToken";

const useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotification();
    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotification = async () => {
    try {
      const permission = await Permission.askAsync(Permission.NOTIFICATIONS);
      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      pushTokenApi.register(token);
      console.log(token);
    } catch (error) {
      console.log("Error getting push token", error);
    }
  };
};

export default useNotifications;
