import MovieList from "../components/MovieList";
import PageNavigator from "../components/PageNavigator";
import SearchField from "../components/SearchField";
import { useState } from "react";
import ApiThrobber from "../components/ApiThrobber";
import ApiErrorCard from "../components/ApiErrorCard";
import { useGetMovies } from "../hooks/useGetMovies";
/*
export default function MovieSearch() {
    const [page,setPage] = useState<number>(1); 
    const [name,setName] = useState<string>("movies"); 
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
           <MovieList movies={data.Search}/>
           <PageNavigator maxPage={Math.ceil(data.totalResults/10)} page={page} setPage={setPage}/>
          </>}
        </>
      )
    }
}
*/
export default function MovieSearch() {
  const [page,setPage] = useState<number>(1); 
  const [name,setName] = useState<string>("movies"); 
 // const{data, isLoading, isError, error}  = useGetMovies(name, page);   
  const result = useGetMovies(name, page);   
  result.status
  if(result.isLoading) return <ApiThrobber/> 
 
  if(result.isError) return <ApiErrorCard message={"oops"}/>
  
    return (
      <>  
        <SearchField setName={setName}/>
        {result.data.Response =="False" && <ApiErrorCard message={result.data.Error}/>}
        {result.data.Response =="True" && 
        <>
         <MovieList movies={result.data.Search}/>
         <PageNavigator maxPage={Math.ceil(result.data.totalResults/10)} page={page} setPage={setPage}/>
        </>}
      </>
    )
  
}