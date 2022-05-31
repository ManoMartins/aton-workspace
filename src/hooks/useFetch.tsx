import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import api from 'services';

type UseFetchProps<T> = {
  url: string;
  config?: AxiosRequestConfig<T>;
};

const useFetch = <T extends any>({ url, config }: UseFetchProps<T>) => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const r = await api(url, config);

      const { data } = r;

      setResponse(data);
    } catch (err: any) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [config, url]);

  useEffect(() => {
    if (config) return;

    fetchData();
  }, [config, fetchData]);

  return { response, loading, error, fetchData };
};

export default useFetch;
