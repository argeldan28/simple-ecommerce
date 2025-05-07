import React, { useState, useEffect } from "react";

export default function Navbar({ cart, toggleSidebar }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white z-50 shadow-md p-4 flex justify-between items-center fixed top-0 w-full transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h2 className="text-xl font-bold">E-Shop</h2>
      <button
        onClick={toggleSidebar}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Carrello ({totalQuantity})
      </button>
    </nav>
  );
}