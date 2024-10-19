
import './App.css'

import { 
  QueryClient,
  QueryClientProvider } from '@tanstack/react-query'
import FirstPage from './pages/FirstPage'
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <FirstPage/>
    </QueryClientProvider>
  )
}


  

