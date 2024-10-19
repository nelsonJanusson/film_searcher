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
       <img 
      src={movie.Poster}
      />
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
      <p>{movie.imdbID}</p>

    </div>
  )
}
  