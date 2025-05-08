import React, { useState, useEffect } from "react";
import { BsCart4 } from "react-icons/bs";


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
      <h2 className="text-xl font-bold">DevShop</h2>
      <button
        onClick={toggleSidebar}
        className="bg-blue-500 text-white px-4 py-2 rounded inline-flex items-center gap-1"
      >
        <BsCart4 /> 
        <span className="w-5 h-5 flex items-center justify-center rounded-full text-white text-xs bg-gray-800">
          {totalQuantity}
        </span>

      </button>

    </nav>
  );
}