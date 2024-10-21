
export default function Fallback({message, queryString}: {message: string; queryString:string;}) {

    return (
      <div className="flex justify-center">
        <div className=" w-1/2 bg-blue-200 rounded-md  mt-10">
          {message=="Movie not found!" ? 
          (
            <p className="text-center  font-bold text-2xl m-6">
              No results found for your search query: '{queryString}'. 
              Please try again with a different query.
            </p>
          ):
          (
            <>
              <p className="text-center  font-bold text-2xl m-6 ">
                There was a server error when searching for movies matching '{queryString}'. 
              </p>
              <p className="my-10 mx-6 text-center font-bold">{message}</p>
          </>
          )}
        </div>
      </div>
    )
}
    