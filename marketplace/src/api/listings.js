import axios from "./axios";

const endpoint = "/listings";

const getListings = () => axios.get(endpoint);
export default { getListings };
