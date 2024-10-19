import { REACT_APP_API_KEY, REACT_APP_BASE_URL } from '../env';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetMovies(name: string,  page: number) {
  const fetchData = async () => {
    const { data } = await axios.get(
      REACT_APP_BASE_URL,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: { apikey: REACT_APP_API_KEY,
                  s:name,
                  page:page,
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
    queryKey: [`api-getMovies-`+name+`-`+page],
    queryFn: async () => {
      return fetchData();
    },
  });
  return { data, isLoading, error };
}
