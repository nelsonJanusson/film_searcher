
import { useState } from 'react';
import ApiThrobber from '../components/ApiThrobber';
import MovieCard from '../components/MovieCard';
import useGetMovies from '../hooks/useGetMovies'
import MovieSearchResults from '../components/MovieSearchResults';

export default function FirstPage() {
  const [page,setPage] = useState<number>(1); 


 const{data, isLoading, error}  = useGetMovies("batman", page);

 const[selected,setSelected] = useState<string>("tt0372784")


 if(isLoading) return <ApiThrobber/> 

  if(error) return <p>hi: error</p>

  return (
    <>
        <MovieSearchResults apiResponse={data} setSelected={setSelected} page={page} setPage={setPage}/>
        <MovieCard selected={selected}/>
    </>
  )
}

  


