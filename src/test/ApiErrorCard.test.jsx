import { render, screen } from '@testing-library/react';
import React from 'react';
import ApiErrorCard from '../components/Fallback';

describe('App tests', () => {
    it('should contains the heading 1', () => {

    render(<ApiErrorCard message='oh no'/>);

    const element = screen.getByText(/oh no/i);

    expect(element).toBeInTheDocument();
     
    });
});