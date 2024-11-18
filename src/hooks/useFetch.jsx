import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(endpoint);
      setLoading(false);
      setData(response.data.results);
      console.log("custom hook response", response.data.results);
    } catch (error) {
      console.log("endpont error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default useFetch;
