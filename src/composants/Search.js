import { useState } from 'react';
import data from '../data/categories.json';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);  
    let results = ""

    const handleInputChange = (event) => {
        const query = event.target.value;  
        setSearchTerm(query); 

        if(query === ""){
            setFilteredData(results)
        }else{
            results = data.elements.filter(
            (item) =>
                item.description.toLowerCase().includes(query.toLowerCase()) || 
                item.categorie.toLowerCase().includes(query.toLowerCase())
            );

            setFilteredData(results);
        }

    };

    return (
        <div className="mb-4">
            <div className="search mb-1 container p-2 d-flex overflow-hidden">

                <input value={searchTerm} onInput={handleInputChange} className="border-0 bg-none p-2" type="search" placeholder="Rechercher votre plat" name="search" id="search"/>

            </div>

            <div className="container overflow-hidden">

                  <div className="rounded results-search container gap-2 p-2">
                    {filteredData.length > 0 ? (
                      filteredData.map((el) => (
                        <div className="bg-white overflow-hidden result rounded p-2" key={el.id}>
                            <img className="rounded w-100" src={require(`../assets/images/${el.img}`)} alt="img-plat" />  
                            <h6 className="p-1">{`CDF ${el.prix}`}</h6>
                            <h6 className="p-1">{el.description}</h6>
                            <p className="p-1">{el.details}</p>
                            <button className="btn btn-danger w-100 p-2 fw-bold"><i className="bi bi-plus-lg"></i> Ajouter</button>
                        </div>
                      ))
                    ) : ""}

                  </div>


            </div>
        </div>

    );
};

export default Search;