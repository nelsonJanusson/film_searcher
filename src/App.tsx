
import './App.css'
import { 
  QueryClient,
  QueryClientProvider } from '@tanstack/react-query'
import { MoviePage }  from './pages/MoviePage'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <MoviePage/>
    </QueryClientProvider>
  );
}


  

