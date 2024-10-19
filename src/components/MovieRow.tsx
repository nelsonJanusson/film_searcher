import { Movie } from "../types/Types";

export default function MovieRow({
    movie,
    setSelected,
  }: {
    movie: Movie;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
  }) {
  
  return (
    <div onClick={ ()=>setSelected(movie.imdbID)}>
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
    </div>
  )
}
  