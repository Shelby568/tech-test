import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe('SearchResults', () => {
    const results = [
        "https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg",
        "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    ];

    it('makes sure component renders correctly', () => {
        const { asFragment } = render(<SearchResults results={results} />);
        expect(asFragment()).toMatchSnapshot();
    });
    
});