import { REACT_APP_API_KEY, REACT_APP_BASE_URL } from '../env';
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponse, Message } from '../types/types';

export const useGetMovies = (name: string,  page: number): UseQueryResult<ApiResponse|Message> => {
  const fetchData = (): Promise<ApiResponse|Message> =>
    axios.get<ApiResponse|Message>(
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
    ).then<ApiResponse|Message>(response => response.data);

  return useQuery<ApiResponse|Message>({
    queryKey: [`api-getMovies-`+name+`-`+page],
    queryFn: fetchData,
  });
}
/*
export default function useGetMovies(name: string,  page: number) {
  const fetchData = async ()  => {
    const { data } = await axios.get<ApiResponse|Message>(
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
    isError,
    error,
  } = useQuery({
    queryKey: [`api-getMovies-`+name+`-`+page],
    queryFn: async () => {
      return fetchData();
    },
  });
  return { data, isLoading, isError, error };
}
*/