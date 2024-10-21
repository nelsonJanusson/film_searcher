import { useEffect, useState } from "react";
import { useGetMovies } from "../hooks/useGetMovies";
import Fallback from "./Fallback";
import LoadingState from "./LoadingState";
import MovieCard from "./MovieCard";
import PageNavigator from "./PageNavigator";

export default function MovieList({queryString}: {queryString: string;}) {

  useEffect(() => {setPage(1)}, [queryString])
  const [page,setPage] = useState<number>(1); 
  const{data, isLoading, isError}  = useGetMovies(queryString, page); 

  if(isLoading) return <LoadingState/> 
  if(isError) return <Fallback queryString={queryString} message={"there was an error fetching your data"}/>

return (
  <>
  {data.Response === "False" && <Fallback queryString={queryString} message={data.Error}/>}
  {data.Response === "True" && 
    <>
      <div className="mb-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-5 lg:mb-0">
        {data.Search.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
      <PageNavigator maxPage={Math.ceil(data.totalResults / 10)} page={page} setPage={setPage} />
    </>
  }
  </>
)
}