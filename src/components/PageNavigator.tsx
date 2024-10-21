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
    <div className="flex flex-row  items-center justify-center w-screen font-bold m-2">
      <button 
      className={`bg-blue-200 rounded-md	text-xl	 w-28 p-2 ${page > 1 ? '' : 'invisible'}`} 
      onClick={ () => setPage(prev => prev - 1)}>
        previous
      </button> 
      <p className="text-4xl mx-3 px-3">{page} / {maxPage}</p>
      <button 
      className={`bg-blue-200 rounded-md text-xl w-28 p-2 ${page < maxPage ? '' : 'invisible'}`} 
      onClick={ () => setPage(prev => prev + 1)}>
        next
      </button>
    </div>
  )
}