
export default function Fallback({message}: {message: string;}) {
    return (
      <>
        <p>There was an error fetching the data</p>
        <p>{message}</p>
      </>
    )
}
    