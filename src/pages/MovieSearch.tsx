import MovieList from "../components/MovieList";
import SearchField from "../components/SearchField";
import { useState } from "react";

export default function MovieSearch() {
  const [name,setName] = useState<string>("movies"); 
  return (
    <>  
      <SearchField setName={setName}/>
      <MovieList name={name}/>
    </>
    )
  }
