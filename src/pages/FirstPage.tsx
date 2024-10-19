
import { useState } from 'react';
import MovieSearchResults from '../components/MovieSearchResults';
import MovieCard from '../components/MovieCard';

export default function FirstPage() {
  const[selected,setSelected] = useState<string|null>(null)

  return (
    <>  
        <MovieSearchResults setSelected={setSelected} />
        {selected && <MovieCard selected={selected}/>}
    </>

  )
}

  


