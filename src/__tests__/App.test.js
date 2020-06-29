import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
    const { asFragment } = render(<App />)
    
    it('makes sure component renders correctly', () => {
        expect(asFragment()).toMatchSnapshot();
    });
});