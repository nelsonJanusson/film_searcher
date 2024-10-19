
import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchField from '../components/SearchField';

describe("test", () => {
    
describe('App tests', () => {
    it('should contains the heading 1', () => {

    render(<SearchField/>);

    const element = screen.getByText(/what are you searching for/i);

    expect(element).toBeInTheDocument();
     
    });
});
describe('App tests', () => {
    it('should contains the heading 2', () => {

    render(<SearchField/>);

    const element = screen.getByText(/what are you searching for/i);

    expect(element).toBeInTheDocument();
     
    });
});
});