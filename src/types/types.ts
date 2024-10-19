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
    Response: boolean;
}