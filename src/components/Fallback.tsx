
export default function Fallback({message, queryString}: {message: string; queryString:string;}) {

    return (
      <div className="flex justify-center">
        <div className="w-auto m-6 lg:w-1/2 bg-blue-200 rounded-md mt-10">
          {message=="Movie not found!" ? 
          (
            <p className="text-center font-bold m-2 lg:text-2xl lg:m-6">
              No results found for your search query: '{queryString}'. 
              Please try again with a different query.
            </p>
          ):
          (
            <>
              <p className="text-center m-2 font-bold lg:text-2xl lg:m-6">
                There was a server error when searching for movies matching '{queryString}'. 
              </p>
              <p className="m-2 text-center lg:font-bold lg:my-10">
                {message}
              </p>
          </>
          )}
        </div>
      </div>
    )
}
    