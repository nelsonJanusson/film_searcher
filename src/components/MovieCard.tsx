import useGetMovie from "../hooks/useGetMovie";
import ApiThrobber from "./ApiThrobber";

export default function MovieCard({
  selected,
}: {
  selected: string;
}) {
  
  const{data, isLoading, error}  = useGetMovie(selected);

  if(isLoading) return <ApiThrobber/> 

  if(error) return <p>hi: error</p>

  return (
    <>
     <p>hi: sucess</p>
      <p>{data.Actors}</p>
    </>
  )
}
  