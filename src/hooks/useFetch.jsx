import axios from "axios";
import { useState, useEffect } from "react";

export const BASE_URL = "https://nabo.onrender.com/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!endpoint) return;

    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await axios.get(`${BASE_URL}${endpoint}`);
        setData(response.data);
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, isError };
};

export default useFetch;
