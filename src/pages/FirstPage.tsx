
import { useState } from 'react';
import ApiThrobber from '../components/ApiThrobber';
import MovieCard from '../components/MovieCard';
import useGetMovies from '../hooks/useGetMovies'
import MovieSearchResults from '../components/MovieSearchResults';

export default function FirstPage() {

 const{data, isLoading, error}  = useGetMovies("batman");

  const[selected,setSelected] = useState<string>("tt0372784")


 if(isLoading) return <ApiThrobber/> 

  if(error) return <p>hi: error</p>

  return (
    <>
        <MovieSearchResults name={data.Search} setSelected={setSelected}/>
        <MovieCard selected={selected}/>
    </>
  )
}

  


