import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductList({ onAddToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}