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
   
    if(error) return <p>hi: error</p>
    
    if(data &&  data.Response=="False"){
      return (
        <>  
          <SearchField setName={setName}/>
          <ApiErrorCard message={data}/>
        </>
      )
    }

    if(data && data.Response=="True"){
      let maxpage =  data.totalResults/10 ;
      if(maxpage % 1 != 0 ){
        maxpage = Math.trunc( maxpage )+1;
      }
    
    return (
      <>
        <SearchField setName={setName}/>
        <MovieList movies={data.Search} setSelected={setSelected}/>
        <PageNavigator maxPage={maxpage} page={page} setPage={setPage}/>
      </>
    )
    }
    
}
  