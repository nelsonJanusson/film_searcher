import { REACT_APP_API_KEY } from '../env';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiResponse } from '../types/types';

export default function useGet(
  id: string
) {
  const fetchData = async () => {
    const { data } = await axios.get<apiResponse>(
      REACT_APP_API_KEY+id,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  };

  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`api-movies`],
    queryFn: async () => {
      return fetchData();
    },
  });
  return { data, isLoading, error };
}
