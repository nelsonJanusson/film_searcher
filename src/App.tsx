
import './App.css'
import { 
  QueryClient,
  QueryClientProvider } from '@tanstack/react-query'
import { MovieSearch }  from './pages/MovieSearch'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <MovieSearch/>
    </QueryClientProvider>
  );
}


  

