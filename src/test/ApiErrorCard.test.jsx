
import { render, screen } from '@testing-library/react';
import React from 'react';
import InputField from '../components/InputField';

describe("test", () => {
    
describe('App tests', () => {
    it('should contains the heading 1', () => {

    render(<InputField/>);

    const element = screen.getByText(/what are you searching for/i);

    expect(element).toBeInTheDocument();
     
    });
});
describe('App tests', () => {
    it('should contains the heading 2', () => {

    render(<InputField/>);

    const element = screen.getByText(/what are you searching for/i);

    expect(element).toBeInTheDocument();
     
    });
});
});