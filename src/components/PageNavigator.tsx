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
    <div className="flex flex-row justify-center w-screen font-bold m-2">
      {page > 1 && <button 
      className=" bg-blue-200 rounded-md	h-10 w-20" 
      onClick={ () => setPage(prev => prev - 1)}>previous
      </button>} 
      <p className=" mx-3 px-3">{page} / {maxPage}</p>
      {page < maxPage && <button 
      className=" bg-blue-200 rounded-md	h-10 w-20" 
      onClick={ () => setPage(prev => prev + 1)}>next</button>}
    </div>
  )
}