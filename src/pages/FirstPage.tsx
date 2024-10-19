
import useGet from '../hooks/useGet'

export default function FirstPage() {
  const{data, isLoading, error}  = useGet("batman");

  if(isLoading) return <p>hi: loading</p>

  if(error) return <p>hi: error {error.message}</p>

  return (
    <>
        <p>hi: sucess</p>
        <h1>{data?.totalResults}</h1>
    </>
  )
}

  


