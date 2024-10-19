import { REACT_APP_API_KEY } from '../env';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetMovies(
  name: string
) {
  const fetchData = async () => {
    const { data } = await axios.get(
      REACT_APP_API_KEY+name,
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
