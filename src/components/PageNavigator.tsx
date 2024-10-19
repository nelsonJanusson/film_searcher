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
    <div>
      {page > 1 && <button onClick={ () => setPage(prev => prev - 1)}>decrease</button>} 
      <p>{page}</p>
      {page < maxPage && <button onClick={ () => setPage(prev => prev + 1)}>increase</button>}
    </div>
  )
}