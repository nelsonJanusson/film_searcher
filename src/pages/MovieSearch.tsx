import MovieList from "../components/MovieList";
import InputField from "../components/InputField";
import { useState } from "react";

export default function MovieSearch() {
  const [queryString,setQueryString] = useState<string>("movies"); 
  return (
    <>  
      <InputField setQueryString={setQueryString}/>
      <MovieList queryString={queryString}/>
    </>
    )
  }
