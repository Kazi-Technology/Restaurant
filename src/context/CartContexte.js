import { createContext, useState, useContext } from "react";

// Création du contexte
const CartContext = createContext();

// Hook personnalisé pour utiliser le contexte facilement
export const useCart = () => useContext(CartContext);

// Provider pour envelopper l'application
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Tableau des produits dans le panier

  // Fonction pour ajouter un produit
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Ajoute le produit au panier
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
