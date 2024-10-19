import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


describe('App tests', () => {
    it('should contains the heading 1', () => {
        
    render(<ApiErrorCard message='oh no'/>);

    const element = screen.getByText(/oh no/i);

    expect(element).toBeInTheDocument();
     
    });
});
