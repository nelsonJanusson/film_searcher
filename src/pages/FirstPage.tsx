
import ApiThrobber from '../components/ApiThrobber';
import MovieTable from '../components/MovieTable';
import useGet from '../hooks/useGet'

export default function FirstPage() {

  const{data, isLoading, error}  = useGet("batman");

  if(isLoading) return <ApiThrobber/> 

  if(error) return <p>hi: error {error.message}</p>

  return (
    <>
        <MovieTable movies={data.Search}/>
    </>
  )
}

  


