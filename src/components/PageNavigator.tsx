export default function PageNavigator({
    maxPage,
    page,
    setPage,
  }: {
    maxPage: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
  }) {
    
  
  return (
    <div className="flex flex-row justify-center">
      {page > 1 && <button className="border-solid border-black border-2 rounded-sm w-20" onClick={ () => setPage(prev => prev - 1)}>previous</button>} 
      <p className=" mx-3 px-3">{page} / {maxPage}</p>
      {page < maxPage && <button className="border-solid border-black border-2 rounded-sm w-20" onClick={ () => setPage(prev => prev + 1)}>next</button>}
    </div>
  )
}