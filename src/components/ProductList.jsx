import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";
import ProductModal from "./ProductModal";

export default function ProductList({ onAddToCart }) {

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {products.map((product) => (
          <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onClick={() => setSelectedProduct(product)}
        />
        
        ))}
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}
