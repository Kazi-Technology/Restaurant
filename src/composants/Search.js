import React from 'react';

const Search = () => {
    return (

        <div className="search mb-5 container p-2 d-flex align-items-center justify-content-center overflow-hidden">

            <input className="border-0 bg-none p-2" type="search" placeholder="Rechercher votre plat" name="search" id="search"/>
            <label className="text-center bg-danger text-white p-2" htmlFor="search"><i class="bi bi-search"></i></label>

        </div>

    );
};

export default Search;