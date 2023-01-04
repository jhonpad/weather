import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (
    url: string,
    options: RequestInit = {}
  ) => {
    setData(null);
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(url, options);
      const dataResponse = await response.json();
      
      if(!response.ok){
        setError(error);
      }

      setData(dataResponse);
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };

  return { data, error, loading, fetchData };
};
