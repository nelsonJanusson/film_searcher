import { Movie } from "../types/types";
import GreyCover from '../assets/solid-color-image.jpeg'; 

export default function MovieCard({movie}: {movie: Movie;}) {
  
  return (
    <div className="flex flex-col content-normal m-3 p-4">
       <img src={movie.Poster== "N/A" ? GreyCover : movie.Poster}/>
       <p className="text-center  font-bold text-xl ">{movie.Title} ({movie.Year})</p>
    </div>
  )
}
  