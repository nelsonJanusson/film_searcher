
export default function Fallback({message, queryString}: {message: string; queryString:string;}) {

    if (message=="Movie not found!") return <p>No results found for your search query: '{queryString}'. Please try again with a different query.</p>
    
    return (
      <>
        <p>There was a server error when searching for movies matching '{queryString}'. </p>
        <p>{message}</p>
      </>
    )
}
    