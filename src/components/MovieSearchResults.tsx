import MovieList from "./MovieList";
import PageNavigator from "./PageNavigator";
import SearchField from "./SearchField";
import { useState } from "react";
import useGetMovies from "../hooks/useGetMovies";
import ApiThrobber from "./ApiThrobber";
import ApiErrorCard from "./ApiErrorCard";

export default function MovieSearchResults({
    setSelected,
  }: {
    setSelected: React.Dispatch<React.SetStateAction<string|null>>;
  }) {
    const [page,setPage] = useState<number>(1); 
    const [name,setName] = useState<string>("batman"); 
    const{data, isLoading, error}  = useGetMovies(name, page);   
   
    if(isLoading) return <ApiThrobber/> 
   
    if(error) return <ApiErrorCard message={error.message}/>
    
    if(data){
      return (
        <>  
          <SearchField setName={setName}/>
          {data.Response =="False" && <ApiErrorCard message={data.Error}/>}
          {data.Response =="True" && 
          <>
           <MovieList movies={data.Search} setSelected={setSelected}/>
           <PageNavigator maxPage={Math.ceil(data.totalResults/10)} page={page} setPage={setPage}/>
          </>}
        </>
      )
  
    }
}