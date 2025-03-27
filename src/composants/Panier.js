import React from 'react'
import data from "../data/categories.json"
import { useCart } from "../context/CartContexte";


const Panier = () => {

    const { cart, isCartOpen } = useCart();

    if (!isCartOpen) return null; 

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

                    {cart.length === 0 ? (
                        <p>Votre panier est vide.</p>
                    ) : (
                        <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                            {item.description} - CDF {item.prix} x {item.quantity}
                            </li>
                        ))}
                        </ul>
                    )}

                </div>


                <button type="submit" className="btn btn-danger p-2 w-50 text-center">Valider</button>
            </form>

        </div>
    );
};

export default Panier;