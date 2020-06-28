import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchResults.css';

const SearchResults = ({ results }) => {
        return (
            <>
            <div className="images">
            {results.map((result) => (
            <img className="result-image" key={result} src={result} alt="spaceimage" />
            ))}
            </div>
            </>
        );
    };
        
SearchResults.propTypes = {
    results: PropTypes.array.isRequired
}

export default SearchResults;