import axios from "axios";
const instance = axios.create({
  baseURL: " http://192.168.1.191:9000/api/",
});

export default instance;
