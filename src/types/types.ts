export type Movie = {
    Title: string;
    Year: number;
    imdbID: string;
    Type: string;
    Poster: string;
}

export type ApiResponse = {
    Search: Movie[];
    totalResults: number;
    Response: "True";
}
export type FullMovie = {
    Title: string;
    Year: number;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot:string ;
    Language: string;
    Country: string;
    Awards: string ;
    Poster: string;
    Ratings: Rating[];
    Metascore: number;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: boolean;
}
export type Rating = {
    Source: string;
    Value: string;
}
export type Message = {
    Response: "False";
    Error: string;
}