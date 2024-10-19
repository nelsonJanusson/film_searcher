import { Movie } from "../types/Types";
import MovieRow from "./MovieRow";

export default function MovieList({
    movies,
    setSelected,
  }: {
    movies: Movie[];
    setSelected: React.Dispatch<React.SetStateAction<string>>;
  }) {
  
  return (
    <>
     {movies?.map(movie =>
        <MovieRow key={movie.imdbID} movie={movie} setSelected={setSelected}/>
      )}
    </>
  )
}
  