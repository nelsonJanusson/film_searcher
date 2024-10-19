import { useState } from "react";
import { useGetMovies } from "../hooks/useGetMovies";
import Fallback from "./Fallback";
import LoadingState from "./LoadingState";
import MovieRow from "./MovieRow";
import PageNavigator from "./PageNavigator";

export default function MovieList({name}: {name: string;}) {

  const [page,setPage] = useState<number>(1); 
  const{data, isLoading, isError}  = useGetMovies(name, page);   
  if(isLoading) return <LoadingState/> 
  if(isError) return <Fallback message={"there was an error fetching your data"}/>

return (
  <>
  {data.Response =="False" && <Fallback message={data.Error}/>}
  {data.Response =="True" && 
  <div className="grid grid-cols-5">
    {data.Search.map(movie => <MovieRow key={movie.imdbID} movie={movie}/>)}
    <PageNavigator maxPage={Math.ceil(data.totalResults / 10)} page={page} setPage={setPage} />
  </div>
  }
  </>
)
}