import { Movie } from "../types/types";
import GreyCover from '../assets/solid-color-image.jpeg'; 

export function MovieCard({
  movie
}: {
  movie: Movie;
}) {
  
  return (
    <div className="flex flex-col m-6">
      <img src={movie.Poster == "N/A" ? GreyCover : movie.Poster}/>
      <p className="text-center font-bold text-xl ">
        {movie.Title} ({movie.Year})
      </p>
    </div>
  );
}
  