
import { useState } from 'react';
import ApiThrobber from '../components/ApiThrobber';
import MovieCard from '../components/MovieCard';
import useGetMovies from '../hooks/useGetMovies'
import MovieList from '../components/MovieList';

export default function FirstPage() {

  const{data, isLoading, error}  = useGetMovies("batman");

  const[selected,setSelected] = useState<string>("tt0372784")


  if(isLoading) return <ApiThrobber/> 

  if(error) return <p>hi: error</p>

  return (
    <>
        <MovieList movies={data.Search} setSelected={setSelected} ></MovieList>
        <MovieCard selected={selected}/>
        <p>{selected}</p>
    </>
  )
}

  


