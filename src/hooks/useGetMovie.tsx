import { REACT_APP_API_KEY_SPECIFIC } from '../env';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetMovies(
  id: string
) {
  const fetchData = async () => {
    const { data } = await axios.get(
      REACT_APP_API_KEY_SPECIFIC+id,
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
    queryKey: [`api-getMovie-`+id],
    queryFn: async () => {
      return fetchData();
    },
  });
  return { data, isLoading, error };
}
