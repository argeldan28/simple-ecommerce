import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';

import { AnimatePresence, motion } from "framer-motion";
import Footer from './components/Footer';

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
    setIsSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
  }

  function handleChangeQuantity(productId, change) {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + change }
          : product
      );
      return updatedCart.filter((product) => product.quantity > 0);
    });
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cart={cart} toggleSidebar={toggleSidebar} />
      <main className="pt-20 p-4">
        <div className="relative my-10 max-w-[90vw] mx-auto">
          <img 
            className="w-full max-h-[70vh] h-auto object-cover" 
            src="homepage-image.webp" 
            alt="Immagine della homepage" 
          />
          <p className="absolute inset-0 text-7xl text-white text-center font-bold font-serif flex items-center justify-center bg-black bg-opacity-50">
            Shopping a portata delle mani
          </p>
        </div>

        <h1 className="text-2xl font-bold mb-4">Prodotti in evidenza</h1>
        <ProductList onAddToCart={handleAddToCart} />
      </main>

      <AnimatePresence>
          {isSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={toggleSidebar}
              />
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
      <Footer />
    </div>
  );
}


export default App;
