import axios from "./axios";

const register = (userInfo) => {
  return axios.post("/users", {
    name: userInfo.name,
    email: userInfo.email,
    password: userInfo.password,
  });
};

export default { register };
