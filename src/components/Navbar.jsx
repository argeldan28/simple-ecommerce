import React from "react";

export default function Navbar({ cart, toggleSidebar }) {

    const totalQuantity = cart.reduce((acc, product) => 
        acc + product.quantity, 0
    );

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-xl font-bold">E-Shop</h2>
      <button 
        onClick={toggleSidebar}
        className="bg-blue-500 text-white px-4 py-2 rounded">
        Carrello ({totalQuantity})
      </button>
    </nav>
  );
}