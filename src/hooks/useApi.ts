// import { useState, useEffect, useCallback } from 'react';
// import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// interface RequestConfig extends AxiosRequestConfig {
//   skip?: boolean; // Custom option to skip the request
// }

// const useAxios = <T,>() => {
//   const [res, setRes] = useState<AxiosResponse<T> | null>(null);
//   const [error, setError] = useState<AxiosError | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const sendRequest = useCallback(
//     async (config: RequestConfig) => {
//       if (config.skip) return;
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await axios(config);
//         setRes(res);
//       } catch (err) {
//         setError(err as AxiosError);
//       } finally {
//         setLoading(false);
//       }
//     },
//     []
//   );

//   return { res, error, loading, sendRequest };
// };

// export default useAxios;


import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  sendRequest: (method: RequestMethod, url: string, data?: any, config?: AxiosRequestConfig) => Promise<void>;
}

function useApi<T>(): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = async (method: RequestMethod, url: string, data?: any, config?: AxiosRequestConfig): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      let response: AxiosResponse<T>;

      switch (method) {
        case 'GET':
          response = await axios.get<T>(url, config);
          break;
        case 'POST':
          response = await axios.post<T>(url, data, config);
          break;
        case 'PUT':
          response = await axios.put<T>(url, data, config);
          break;
        case 'DELETE':
          response = await axios.delete<T>(url, config);
          break;
        default:
          throw new Error('Invalid request method');
      }

      setData(response.data);
    } catch (err:any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, sendRequest };
}

export default useApi;

