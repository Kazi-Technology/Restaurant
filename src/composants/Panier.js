import React from 'react';
import data from "../data/categories.json"

const Panier = () => {
    return (
        <div className="form-fact d-flex align-items-center justify-content-center w-100 position-fixed">
            <form className="bg-white p-3 rounded" action="/admin/home" method="get">

                <div className="choixTable">
                    <label htmlFor="selectTable">Selectionner Table</label><br />
                    <select name="table" className="from-control w-50 " id="selectTable">
                        {data.tables.map((tab) =>(

                            <option key={tab.id} value={tab.nomTable}>{tab.nomTable}</option>

                        ))}
                    </select>
                </div>

                <div className="mb-4">


                </div>


                <button type="submit" className="btn btn-danger p-2 w-50 text-center">Valider</button>
            </form>

        </div>
    );
};

export default Panier;