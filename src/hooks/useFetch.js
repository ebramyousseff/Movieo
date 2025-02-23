import axios from "axios"
import { useState,useEffect } from "react"


const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(endpoint, {
          params: {
            api_key: "d15eeb12eda8bb49e575e458d6307748",
          },
        });
        setData(response.data.results);
        setLoading(false);
      } catch (err) {
        setError(err.response || err.message);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [endpoint]);
  
    return { data, loading, error };
  };
  export default useFetch;
  