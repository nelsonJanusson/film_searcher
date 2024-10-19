import { Movie } from "../types/types";

export default function MovieRow({movie}: {movie: Movie;}) {
  
  return (
    <div className="flex flex-col content-normal m-3  p-8">
       <img src={movie.Poster}/>
       <p>{movie.Title} ({movie.Year})</p>
    </div>
  )
}
  