import { useState, useEffect } from "react";

const useGetSetData = (url) => {
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortFetch = new AbortController();

  const getSetData = async (url, func) => {
    try {
      let data = await fetch(url, { signal: abortFetch.signal });

      if (data.ok) {
        let parsed = await data.json();
        func(parsed);

        setLoading(false);
        setError(null);
      } else {
        func(null);
        throw Error("problem getting data");
      }
    } catch (err) {
      if (err.name === "AbortError") {
        console.log(`abort`);
      } else {
        setLoading(false);
        setError(err);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getSetData(url, setData);
    }, 1500);
    return () => abortFetch.abort();
  }, [url]);

  return { data, Loading, error };
};

export default useGetSetData;
