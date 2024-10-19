
import { useState } from 'react';
import ApiThrobber from '../components/ApiThrobber';
import MovieCard from '../components/MovieCard';
import MovieTable from '../components/MovieTable';
import useGet from '../hooks/useGet'

export default function FirstPage() {

  const{data, isLoading, error}  = useGet("batman");

  const[selected,setSelected] = useState<string>("nope")

  if(isLoading) return <ApiThrobber/> 

  if(error) return <p>hi: error {error.message}</p>

  return (
    <>
        <MovieTable movies={data.Search} setSelected={setSelected}/>
        <MovieCard title={selected}/>
    </>
  )
}

  


