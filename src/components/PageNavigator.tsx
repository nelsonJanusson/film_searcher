export  function PageNavigator({
  maxPage,
  page,
  setPage
}: {
  maxPage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
    
  return (
    <div className="fixed bottom-0 w-full lg:relative flex items-center justify-center font-bold text-xl">
      <button 
      className={`bg-blue-200 rounded-md w-28 p-2 ${page <= 1 && 'invisible'}`} 
      onClick={() => setPage(prev => prev - 1)}
      >
        previous
      </button> 
      <p className="lg:text-3xl m-6">
        {page}/{maxPage}
      </p>
      <button 
      className={`bg-blue-200 rounded-md w-28 p-2 ${page >= maxPage && 'invisible'}`} 
      onClick={() => setPage(prev => prev + 1)}
      >
        next
      </button>
    </div>
  )
}