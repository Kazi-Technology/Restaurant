import { createContext, useState, useContext } from "react";

// Création du contexte
const CartContext = createContext();

// Hook personnalisé pour utiliser le contexte facilement
export const useCart = () => useContext(CartContext);

// Provider pour envelopper l'application
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Tableau des produits dans le panier
  const [isCartOpen, setIsCartOpen] = useState(false); // Pour afficher ou cacher le panier

  // Fonction pour ajouter un produit
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Fonction pour afficher/cacher le panier
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, isCartOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

