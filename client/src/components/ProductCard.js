import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-md hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <p className="text-sm mt-1 text-gray-500">{product.description}</p>
    </div>
  );
};

export default ProductCard;
