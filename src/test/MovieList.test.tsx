
import { render, screen, waitFor } from '@testing-library/react';
import MovieList   from '../components/MovieList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('MovieList tests', () => {

    test('should load first page of ironman results correctly', async () => {

        const queryClient=new QueryClient();

        render(
        <QueryClientProvider client={queryClient}>    
            <MovieList queryString="ironman" />
        </QueryClientProvider>
        );

        expect(screen.getByRole("progressbar")).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText("next")).toHaveRole('button');
            expect(screen.getByText("previous")).toHaveRole('button');
            expect(screen.getByText("1/4")).toHaveRole('paragraph');
        });
    });

    test('should give correct fallback incase movie is not found', async () => {

        const queryClient = new QueryClient();

        render(
        <QueryClientProvider client={queryClient}>    
            <MovieList queryString="xxxxx" />
        </QueryClientProvider>
        );

        expect(screen.getByRole("progressbar")).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText("No results found for your search query: 'xxxxx'. Please try again with a different query.")).toHaveRole('paragraph');
        });
    });

    test('should give correct fallback incase search is to general', async () => {

        const queryClient=new QueryClient();

        render(
            <QueryClientProvider client={queryClient}>    
                <MovieList queryString="the" />
            </QueryClientProvider>
        );

        await waitFor(() => {
            expect(screen.getByText("There was a server error when searching for movies matching 'the'.")).toHaveRole('paragraph');
            expect(screen.getByText("Too many results.")).toHaveRole('paragraph');
        });
    }); 
});
