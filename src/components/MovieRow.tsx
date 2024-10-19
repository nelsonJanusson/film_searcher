import { Movie } from "../types/types";

export default function MovieRow({
    movie,
    setSelected,
  }: {
    movie: Movie;
    setSelected: React.Dispatch<React.SetStateAction<string|null>>;
  }) {
  
  return (
    <div onClick={ ()=>setSelected(movie.imdbID)}>
       <img 
      src={movie.Poster}
      />
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
      <p>{movie.imdbID}</p>
    </div>
  )
}
  