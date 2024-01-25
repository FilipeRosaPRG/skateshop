// CartContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateCartItemQuantity: (productId: number, newQuantity: number) => void;
}

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?: number | any;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveCartToLocalStorage = (updatedCart: Product[]) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, { ...product, quantity: 1 }];
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((product) => product.id !== productId);
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const updateCartItemQuantity = (productId: number, newQuantity: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) => (product.id === productId ? { ...product, quantity: newQuantity } : product));
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
