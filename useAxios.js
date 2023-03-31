import { useState, useEffect } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "url api",
});
const useAxios = (paramater) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getFetch = async () => {
    try {
      const result = await instance.request(paramater);
      setResponse(result.data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getFetch();
  }, [paramater.url]);
  return [response, error, loading];
};
export default useAxios;
