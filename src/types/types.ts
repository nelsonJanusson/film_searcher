export type movie = {
    Title : string;
    Year : number;
    imdbID: string;
    Type: string;
    Poster: string;
}

export type apiResponse = {
    Search : movie [];
    totalResults:575;
    Response: boolean;
}