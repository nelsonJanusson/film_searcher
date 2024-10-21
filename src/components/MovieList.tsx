import { useEffect, useState } from "react";
import { useGetMovies } from "../hooks/useGetMovies";
import { Fallback } from "./Fallback";
import { LoadingState } from "./LoadingState";
import { MovieCard } from "./MovieCard";
import { PageNavigator } from "./PageNavigator";

export default function MovieList({
  queryString
}: {
  queryString: string;
}) {

  useEffect(() => {setPage(1)}, [queryString]);
  const [page, setPage] = useState<number>(1); 
  const{data, isLoading, isError} = useGetMovies(queryString, page); 

  if(isLoading) return <LoadingState/> 
  if(isError) return <Fallback queryString={queryString} message={"oops"}/>
  if(data.Response === "False") return <Fallback queryString={queryString} message={data.Error}/>

  return (
    <> 
      <div className="m-6 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-5">
        {data.Search.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
      <PageNavigator maxPage={Math.ceil(data.totalResults / 10)} page={page} setPage={setPage} />
    </>
  );
}