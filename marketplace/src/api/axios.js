import axios from "axios";
const instance = axios.create({
  baseURL: " http://192.168.1.191:9000/api/",
  timeout: 5000,
});

export default instance;
