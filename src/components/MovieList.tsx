import { Movie } from "../types/types";
import MovieRow from "./MovieRow";

export default function MovieList({
    movies,
  }: {
    movies: Movie[];
  }) {
  
  return (
    <div className="grid grid-cols-5">
     {movies.map(movie =>
        <MovieRow key={movie.imdbID} movie={movie}/>
      )}
    </div>
  )
}
  