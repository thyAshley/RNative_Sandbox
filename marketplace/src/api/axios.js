import axios from "axios";
import cache from "../utils/cache";

const instance = axios.create({
  baseURL: "http://192.168.1.191:9000/api/",
  timeout: 5000,
});

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
