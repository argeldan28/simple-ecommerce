import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';

import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleAddToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function handleChangeQuantity(productId, change) {
    setCart((prevCart) => {
      // Trova il prodotto da aggiornare
      const updatedCart = prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + change }
          : product
      );
  
      // Rimuove i prodotti con quantità <= 0
      return updatedCart.filter((product) => product.quantity > 0);
    });
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cart={cart} toggleSidebar={toggleSidebar} />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Prodotti in evidenza</h1>
        <ProductList onAddToCart={handleAddToCart} />
      </main>

      <AnimatePresence>
          {isSidebarOpen && (
            <>
              {/* Overlay animato */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={toggleSidebar}
              />

              {/* Sidebar animato (già incluso nel componente Sidebar) */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50"
              >
                <Sidebar
                  cart={cart}
                  toggleSidebar={toggleSidebar}
                  onChangeQuantity={handleChangeQuantity}
                />
              </motion.div>
            </>
          )}
      </AnimatePresence>
    </div>
  );
}


export default App;
