import {REACT_APP_API_KEY, REACT_APP_BASE_URL } from '../env';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetMovies(
  id: string
) {
  const fetchData = async () => {
    const { data } = await axios.get(
      REACT_APP_BASE_URL,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: { apikey: REACT_APP_API_KEY,
          i:id,
          type:"movie"
 } 
      }
    );
    return data;
  };

  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`api-getMovie-`+id],
    queryFn: async () => {
      return fetchData();
    },
  });
  return { data, isLoading, error };
}
