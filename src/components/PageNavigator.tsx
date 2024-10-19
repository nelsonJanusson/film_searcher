export default function PageNavigator({
    page,
    setPage,
  }: {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
  }) {
    
  
  return (
    <div>
      <button onClick={ ()=>setPage(prev => prev - 1)}>decrease</button>
      <p>{page}</p>
      <button onClick={ ()=>setPage(prev => prev + 1)}>increase</button>
    </div>
  )
}