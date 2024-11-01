export function Fallback({
  message, 
  queryString
}: {
  message: string; 
  queryString:string;
}) {
  
  return (
    <div className="flex p-12 justify-center">
      <div className="font-bold text-center lg:w-1/2 bg-blue-200 rounded-md">
        {message == "Movie not found!" ? (
          <p className="m-4 lg:text-2xl ">
            No results found for your search query: '{queryString}'. 
            Please try again with a different query.
          </p>
        ):(
          <>
            <p className="m-4 lg:text-2xl">
              There was a server error when searching for movies matching '{queryString}'. 
            </p>
            <p className="m-4 font-normal">
              {message}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
    