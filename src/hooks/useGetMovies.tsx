import { REACT_APP_API_KEY, REACT_APP_BASE_URL } from '../env';
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponse, Exception } from '../types/types';

export const useGetMovies = (queryString: string,  page: number): UseQueryResult<ApiResponse|Exception> => {
  const fetchData = (): Promise<ApiResponse|Exception> =>
    axios.get<ApiResponse|Exception>(
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
    ).then<ApiResponse|Exception>(response => response.data);

  return useQuery<ApiResponse|Exception>({
    queryKey: [`api-getMovies-`+queryString+`-`+page],
    queryFn: fetchData,
  });
}