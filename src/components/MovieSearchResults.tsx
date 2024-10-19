import { useState } from "react";
import MovieList from "./MovieList";
import PageNavigator from "./PageNavigator";
import { Movie } from "../types/Types";

export default function MovieSearchResults({
    name,
    setSelected,
  }: {
    name: Movie[];
    setSelected: React.Dispatch<React.SetStateAction<string>>;
  }) {
  

  const [page,setPage] = useState<number>(0); 

  
  
  return (
    <>
        <MovieList movies={name} setSelected={setSelected}/>
        <PageNavigator page={page} setPage={setPage }/>
    </>
  )
}
  