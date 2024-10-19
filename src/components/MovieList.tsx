import { Movie } from "../types/types";
import MovieRow from "./MovieRow";

export default function MovieList({
    movies,
    setSelected,
  }: {
    movies: Movie[];
    setSelected: React.Dispatch<React.SetStateAction<string|null>>;
  }) {
  
  return (
    <div className="grid grid-cols-5">
     {movies.map(movie =>
        <MovieRow key={movie.imdbID} movie={movie} setSelected={setSelected}/>
      )}
    </div>
  )
}
  