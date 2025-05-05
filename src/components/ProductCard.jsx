import React from "react";

export default function ProductCard({ product, onAddToCart, onClick }) {
  return (
    <div onClick={onClick} className="bg-stone-200 rounded-lg shadow-md overflow-hidden w-full max-w-xs flex flex-col cursor-pointer">
      <div className="h-48 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">€{product.price}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-auto bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded">
          Aggiungi
        </button>
      </div>
    </div>
  );
}
