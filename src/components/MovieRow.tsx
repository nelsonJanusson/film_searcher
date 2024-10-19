import { Movie } from "../types/types";

export default function MovieRow({
    movie,
    setSelected,
  }: {
    movie: Movie;
    setSelected: React.Dispatch<React.SetStateAction<string|null>>;
  }) {
  
  return (
    <div onClick={ ()=>setSelected(movie.imdbID)} className="flex flex-col content-normal m-3">
       <img src={movie.Poster}/>
       <p>{movie.Title} ({movie.Year})</p>
    </div>
  )
}
  