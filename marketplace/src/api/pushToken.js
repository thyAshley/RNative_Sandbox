import axios from "./axios";

const register = (pushToken) =>
  axios.post("/expoPushTokens", {
    token: pushToken,
  });

export default { register };
