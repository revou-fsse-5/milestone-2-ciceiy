import React from "react";

const ProductModal = ({ isOpen, onClose, product, onAddToCart }) => {
  if (!isOpen || !product) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 pt-4 pb-4 max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
        <div className="w-full h-48 flex justify-center items-center overflow-hidden mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain h-full w-full"
          />
        </div>
        <p className="text-s text-gray-700 mb-4">{product.description}</p>
        <h3 className="text-lg font-bold mb-4">${product.price}</h3>
        <div className="flex gap-x-3">
          <button
            className="w-1/2 py-2 bg-yellow-400 text-white font-semibold rounded-full shadow hover:bg-yellow-300 focus:outline-none"
            onClick={() => {
              alert("Added to Cart!");
              onAddToCart(product);
            }}
          >
            Add to Cart
          </button>
          <button
            className="w-1/2 py-2 bg-gray-500 text-white font-semibold rounded-full shadow hover:bg-gray-400 focus:outline-none"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
