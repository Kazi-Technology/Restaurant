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
            <div className="search mb-1 container p-2 d-flex align-items-center justify-content-center overflow-hidden">

                <input value={searchTerm} onInput={handleInputChange} className="border-0 bg-none p-2" type="search" placeholder="Rechercher votre plat" name="search" id="search"/>
                <label className="text-center bg-danger text-white p-2" htmlFor="search"><i class="bi bi-search"></i></label>

            </div>

            <div className="container overflow-hidden">

                  <div className="rounded results-search container gap-2 p-2">
                    {filteredData.length > 0 ? (
                      filteredData.map((el) => (
                        <div className="bg-white overflow-hidden result rounded p-2" key={el.id}>
                            <img className="rounded" src={require(`../assets/images/${el.img}`)} alt="img-plat" />  
                            <h5 className="p-1">{`CDF ${el.prix}`}</h5>
                            <p className="p-1">{el.description}</p>
                            <button className="btn btn-danger w-100 p-2 fw-bold"><i className="bi bi-plus-lg"></i> Ajouter</button>
                        </div>
                      ))
                      ) : (
                      <p className="p-2"> Aucun élément trouvé </p>
                    )}
                  </div>


            </div>
        </div>

    );
};

export default Search;