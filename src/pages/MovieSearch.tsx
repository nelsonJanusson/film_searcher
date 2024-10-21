import InputField from "../components/InputField";
import MovieList from "../components/MovieList";
import { useState } from "react";

export function MovieSearch() {

  const [queryString,setQueryString] = useState<string>("movie"); 

  return (
    <>  
      <InputField setQueryString={setQueryString}/>
      <MovieList queryString={queryString}/>
    </>
    );
  }
