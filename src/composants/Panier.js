import React from 'react'
import data from "../data/categories.json"
import { useCart } from "../context/CartContexte";


const Panier = () => {

    const { toggleCart } = useCart()
    let montTot = 0

    const { cart, isCartOpen } = useCart();

    if (!isCartOpen) return null; 

    return (
        <div className="form-fact d-flex align-items-center justify-content-center w-100 position-fixed">
            <form className="bg-white p-3 overflow-hidden rounded" action="/admin/home" method="get">

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
                    <div className="">

                        <div className="d-flex justify-content-between">
                            <h6>Plat</h6>
                            <h6>Quantité</h6>
                            <h6>Prix</h6>
                        </div>
                        
                        {cart.map((item) => (
                            <div className="d-flex justify-content-between" key={item.id}>
                                <input readOnly type="text" value={item.description} className="form-control border-0" name="description" />
                                <input id="aaa" min="1" type="number" value={item.quantity} className="form-control text-center border-0 w-5" name="quantity" />
                                <input id="prx" readOnly type="text" value={`CDF ${item.prix * item.quantity}`} className="form-control border-0" name="prixTot" />
                                <p className="d-none">{montTot += item.prix * item.quantity}</p>          
                            </div>
                        ))}
                        
                    </div>
                    )}
                    <hr />

                    <div className="d-flex justify-content-between">

                        <h6>Montant Total à Payer</h6> 
                        <h6>{`CDF ${montTot}`}</h6>                 

                    </div>
                </div>

                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-danger p-2 w-50 text-center">Valider</button>
                    <button onClick={toggleCart} type="reset" className="btn btn-warning p-2 w-50 text-center">Annuler</button>
                </div>
            </form>

        </div>
    );
};

export default Panier;