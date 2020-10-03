import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    setHasError(false);

    try {
      const response = await apiFunc(...args);
      if (response) setData(response.data);
    } catch (error) {
      setHasError(true);
    }

    setLoading(false);
  };

  return { data, hasError, loading, request };
};

export default useApi;
