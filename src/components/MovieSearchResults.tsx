import {useState} from "react";
import MovieList from "./MovieList";
import PageNavigator from "./PageNavigator";
import {ApiResponse} from "../types/Types";

export default function MovieSearchResults({
    apiResponse,
    setSelected,
    page,
    setPage,
  }: {
    apiResponse: ApiResponse;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
  }) {
  

  let maxpage =  apiResponse.totalResults/10 ;
  if(maxpage % 1 != 0 ){
    maxpage = Math.trunc( maxpage )+1;
  }
  

  return (
    <>
        <MovieList movies={apiResponse.Search} setSelected={setSelected}/>
        <PageNavigator maxPage={maxpage} page={page} setPage={setPage }/>
    </>
  )
}
  