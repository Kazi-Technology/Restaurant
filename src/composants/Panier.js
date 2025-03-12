import React from 'react';

const Panier = () => {
    return (
        <div className="form-fact">
            <form action="/admin/index" method="get">

                <div className="choixTable">
                    <select name="table" id="" className="selectTable">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            <button type="submit" className="btn btn-success">Valider</button>
            </form>

        </div>
    );
};

export default Panier;