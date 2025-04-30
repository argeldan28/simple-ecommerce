import React from "react";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white p-4 rounded shadow">
        <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover rounded" 
        />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-600">€{product.price}</p>
        <button
            onClick={() => onAddToCart(product)}
            className="mt-2 bg-green-500 text-white px-3 py-1 rounded">Aggiungi
        </button>
    </div>
  );
}