import useGetMovie from "../hooks/useGetMovie";
import ApiErrorCard from "./ApiErrorCard";
import ApiThrobber from "./ApiThrobber";

export default function MovieCard({
  selected,
}: {
  selected: string;
}) {
  
  const{data, isLoading, error}  = useGetMovie(selected);

  if(isLoading) return <ApiThrobber/> 

  if(error) return <ApiErrorCard message={error.message}/>

  return (
      <p>{data.Actors}</p>
  )
}
  