import React from "react";

export default function ProductModal({ product, onClose }) {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded max-w-md w-full relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600 hover:text-black">
          ✕
        </button>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover rounded mb-4" 
        />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">Prezzo: €{product.price}</p>
        <p className="text-gray-500">{product.description}</p>
      </div>
    </div>
  );
}
