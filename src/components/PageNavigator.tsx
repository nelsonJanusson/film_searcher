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
    <div className="fixed bottom-0 w-full lg:relative flex flex-row items-center justify-center font-bold">
      <button 
      className={`bg-blue-200 rounded-md	text-xl	 w-28 p-2 ${page > 1 ? '' : 'invisible'}`} 
      onClick={ () => setPage(prev => prev - 1)}>
        previous
      </button> 
      <p className="text-xl lg:text-4xl m-3 px-3">{page} / {maxPage}</p>
      <button 
      className={`bg-blue-200 rounded-md text-xl w-28 p-2 ${page < maxPage ? '' : 'invisible'}`} 
      onClick={ () => setPage(prev => prev + 1)}>
        next
      </button>
    </div>
  )
}