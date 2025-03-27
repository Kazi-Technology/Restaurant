import React from 'react';
import data from "../data/categories.json"

const Panier = () => {
    return (
        <div className="form-fact">
            <form action="/admin/home" method="get">

                <div className="choixTable">
                    <select name="table" id="" className="selectTable">
                        {data.tables.map((tab) =>(

                            <option key={tab.id} value={tab.nomTable}>{tab.nomTable}</option>

                        ))}
                    </select>
                </div>
            <button type="submit" className="btn btn-success">Valider</button>
            </form>

        </div>
    );
};

export default Panier;