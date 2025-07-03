import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import ServiceCard from './components/ServiceCard';
import ProductNotifModal from './components/ProductNotifModal';

import { AnimatePresence, motion } from "framer-motion";
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notification, setNotification] = useState("");
  const [notificationType, setNotificationType] = useState("success");


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
    showNotification(`${product.name} aggiunto al carrello`)
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

      const finalCart = updatedCart.filter((product) => product.quantity > 0);

      const changedProduct = cart.find((p) => p.id === productId);
      if (changedProduct) {
        const action = change > 0 ? "aggiunto" : "rimosso";
        const type = change > 0 ? "success" : "error"
        showNotification(`${changedProduct.name} ${action} dal carrello`, type)
      }

      return finalCart;
    });
  }

  function showNotification(message, type = "success") {
    setNotification(message);
    setNotificationType(type);
    setTimeout(() => {
      setNotification("");
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cart={cart} toggleSidebar={toggleSidebar} />
      <main>
        <div className="relative my-10 max-w-[100vw] mx-auto">
          <img 
            className="w-full max-h-[70vh] h-auto object-cover brightness-50" 
            src="homepage-image.webp" 
            alt="Immagine della homepage" 
          />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white text-center font-bold font-serif flex items-center justify-center"
          >
            Shopping a portata di mano
          </motion.p>

        </div>
        



        <h1 className="text-2xl font-bold mb-4 pl-3 sm:pl-6 md:pl-8 xl:pl-12">Prodotti in evidenza</h1>
        <ProductList onAddToCart={handleAddToCart} />




        <h2 className="text-2xl font-bold mt-12 mb-5 pl-3 sm:pl-6 md:pl-8 xl:pl-12">I nostri Servizi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 md:px-8 xl:px-12">
          <ServiceCard
            icon="🚚"
            title="Spedizione Veloce"
            description="Consegna rapida in 24/48 ore in tutta Italia."
          />
          <ServiceCard
            icon="💳"
            title="Pagamenti Sicuri"
            description="Tutti i pagamenti sono protetti e criptati."
          />
          <ServiceCard
            icon="📞"
            title="Supporto Clienti"
            description="Assistenza dedicata 7 giorni su 7 via chat o telefono."
          />
        </div>

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

      <ProductNotifModal 
        message={notification}
        type={notificationType}
        onClose={() => setNotification("")}
      />

      <Footer />
    </div>
  );
}


export default App;
