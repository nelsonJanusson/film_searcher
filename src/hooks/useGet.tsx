import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGet(
  id: string
) {
  const fetchData = async () => {
    const { data } = await axios.get(
        'https://api.github.com/repos/TanStack/query'
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