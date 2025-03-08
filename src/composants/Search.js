import React from 'react';

const Search = () => {
    return (
        
        <div className="container mb-4">

            <div className="search overflow-hidden container bg-white">
            
                <input className="border-0 p-2" type="search" placeholder="search" name="search" id="search"/>
                <label className="text-center bg-info text-white p-2" htmlFor="search"><i class="bi bi-search"></i></label>

            </div>

        </div>
    );
};

export default Search;