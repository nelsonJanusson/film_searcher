import { REACT_APP_API_KEY, REACT_APP_BASE_URL } from '../env';
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponse, Message } from '../types/types';

export const useGetMovies = (queryString: string,  page: number): UseQueryResult<ApiResponse|Message> => {
  const fetchData = (): Promise<ApiResponse|Message> =>
    axios.get<ApiResponse|Message>(
      REACT_APP_BASE_URL,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: { apikey: REACT_APP_API_KEY,
                  s:queryString,
                  page:page,
                  type:"movie"
         } 
      }
    ).then<ApiResponse|Message>(response => response.data);

  return useQuery<ApiResponse|Message>({
    queryKey: [`api-getMovies-`+queryString+`-`+page],
    queryFn: fetchData,
  });
}