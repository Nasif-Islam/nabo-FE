import axios from "axios";
import { useState, useEffect } from "react";

export const BASE_URL = "https://nabo.onrender.com/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!endpoint) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${BASE_URL}${endpoint}`);
        setData(response.data);
      } catch (err) {
        console.log(err);
        setError({
          message: err.message,
          status: err.response?.status,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useFetch;
