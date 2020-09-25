import axios from "axios";
import { YELP_TOKEN } from "./secret";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${YELP_TOKEN}`,
  },
});
