import axios from "axios";
import cache from "../utils/cache";
import authStorage from "../Context/storage";

const instance = axios.create({
  baseURL: "http://192.168.1.191:9000/api/",
  timeout: 25000,
});

const getAuth = async () => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  axios.defaults.headers.common["x-auth-token"] = authToken;
};

getAuth();

const get = instance.get;

instance.get = async (url, config) => {
  try {
    const response = await get(url, config);
    if (response.data) {
      cache.store(url, response.data);
      return response;
    }
  } catch (error) {
    console.log(error);
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : { ok: false, data };
};

export default instance;
