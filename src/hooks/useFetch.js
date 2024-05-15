import { useEffect, useState } from "react";
import axios from "../api";

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(api)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.response.data));
  }, []);

  return { data, error };
};

export default useFetch;
