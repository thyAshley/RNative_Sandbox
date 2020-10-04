import axios from "./axios";

const login = (email, password) => axios.post("/auth", { email, password });

export default {
  login,
};
