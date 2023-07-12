import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetch = (url: string, key: string) => {
  const fetchData = (url: string) => {
    return axios.get(url).then((res) => res.data);
  };

  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: [key],
    queryFn: () => fetchData(url),
  });

  return {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};
