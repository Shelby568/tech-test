import React from 'react';
import { render } from '@testing-library/react';
import SearchResult from '../components/SearchResults';

describe('SearchResults', () => {
    const { asFragment } = render(<SearchResult />)

    it('makes sure component renders correctly', () => {
        expect(asFragment()).toMatchSnapshot();
    });
    
});