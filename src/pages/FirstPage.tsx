
import { REACT_APP_API_KEY } from '../env';
import useGet from '../hooks/useGet'

export default function FirstPage() {
  const{data, isLoading, error}  = useGet("hi");

  if(isLoading) return <p>hi: loading</p>

  if(error) return <p>hi: error {error.message}</p>

  return (
    <>
        <p>hi: sucess</p>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
    </>
  )
}

  


