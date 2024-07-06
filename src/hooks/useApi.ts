
import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  sendRequest: (method: RequestMethod, url: string, data?: any, config?: AxiosRequestConfig) => Promise<void>;
  statusCode: Number;
}

function useApi<T>(): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusCode, setStatusCode] = useState<Number>(200);

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
      if(response.status){
        setStatusCode(response.status);
      }
    } catch (err:any) {
      setError(err.message);
      setStatusCode(err.response.status);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, sendRequest,statusCode };
}

export default useApi;

