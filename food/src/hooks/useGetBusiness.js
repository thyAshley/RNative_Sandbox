import { useEffect, useState } from "react";

import axios from "../api/yelp";

const useGetBusiness = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRestaurants("burger");
  }, []);

  const getRestaurants = async (term) => {
    try {
      const response = await axios.get(`/search`, {
        params: {
          term,
          location: "malaysia",
          limit: 50,
        },
      });
      setError(null);
      setResults(response.data.businesses);
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return [results, error, getRestaurants];
};

export default useGetBusiness;
