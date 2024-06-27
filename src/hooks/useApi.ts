import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface RequestConfig extends AxiosRequestConfig {
  skip?: boolean; // Custom option to skip the request
}

const useAxios = <T,>() => {
  const [res, setRes] = useState<AxiosResponse<T> | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendRequest = useCallback(
    async (config: RequestConfig) => {
      if (config.skip) return;
      setLoading(true);
      setError(null);
      try {
        const res = await axios(config);
        setRes(res);
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { res, error, loading, sendRequest };
};

export default useAxios;
