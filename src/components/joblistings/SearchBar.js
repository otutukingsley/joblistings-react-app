import React from 'react';

const SearchBar = ({ filters, handleFilterClick, clearBtn }) => {
    return (
        <div className="search">
            <div>
            {filters.map((filter) => 
                <span onClick={() => handleFilterClick(filter)} className="tab tab-close">{filter}</span>
            )}
            </div>

            <button className="btn" onClick={()=> clearBtn()}>Clear</button>
        </div>
    );
};

export default SearchBar;
