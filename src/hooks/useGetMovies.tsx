import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponse, Exception } from '../types/types';

const apiKey = import.meta.env.VITE_APP_API_KEY
const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const useGetMovies = (
  queryString: string, 
  page: number
): UseQueryResult<ApiResponse|Exception> => {
  
  const fetchData = (): Promise<ApiResponse|Exception> =>
    axios.get<ApiResponse|Exception>(
      baseUrl,
      {
        params: { 
          apikey: apiKey,
          s:queryString,
          page:page,
          type:"movie"
        } 
      }
    ).then(response => response.data)
     .catch(error => {throw new Error(error.response.data.Error);})

    return useQuery<ApiResponse|Exception>({
    queryKey: [queryString + `-` + page],
    queryFn: fetchData,
  });
}