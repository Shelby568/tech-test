import React from 'react';
import '../styles/SearchResults.css';

const SearchResults = ({ results, setStatus }) => {

    setStatus('loading');

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
        


export default SearchResults;