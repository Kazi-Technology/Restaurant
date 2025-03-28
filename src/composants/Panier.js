import React from 'react'
import data from "../data/categories.json"
import { useCart } from "../context/CartContexte";


const Panier = () => {

    const { cart, isCartOpen } = useCart();

    if (!isCartOpen) return null; 

    return (
        <div className="form-fact d-flex align-items-center justify-content-center w-100 position-fixed">
            <form className="bg-white p-3 rounded" action="/admin/home" method="get">

            <h2 className="mb-2">Commande</h2>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, neque.</p>

                <div className="choixTable mb-3">
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
                    <table className="gap-2">
                        <thead>
                            <th>
                                <td>Plat</td>
                                <td>Quantité</td>
                                <td>Prix Total</td>
                            </th>
                        </thead>

                        <tfoot>

                        </tfoot>

                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td><input type="text" value={item.description} className="form-control border-0" name="description" /></td>
                                    <td><input type="text" value={item.quantity} className="form-control border-0" name="quantity" /></td>
                                    <td><input type="text" value={`CDF ${item.prix * item.quantity}`} className="form-control border-0" name="prixTot" /></td>                            
                                </tr>
                            ))}
                        </tbody>
                        
                    </table>
                    )}
                    <hr />
                </div>

                <button type="submit" className="btn btn-danger p-2 w-50 text-center">Valider</button>
            </form>

        </div>
    );
};

export default Panier;