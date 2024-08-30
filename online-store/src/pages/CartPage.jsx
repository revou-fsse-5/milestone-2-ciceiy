import React from "react";
import NavBar from "../components/NavBar";

const CartPage = ({
  cartItems,
  onAddProduct,
  onRemoveProduct,
  onClearCart,
}) => {
  const totalPrice = cartItems.reduce(
    (price, product) => price + product.quantity * product.price,
    0
  );

  return (
    <div className="flex flex-col h-screen">
      <NavBar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

        <div className="bg-white text-black p-4 mx-auto w-1/2">
          <h2 className="text-xl font-bold mb-4 flex justify-between items-center border-b border-gray-300 pb-4">
            Cart Items
            {cartItems.length >= 1 && (
              <button
                className="bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700"
                onClick={onClearCart}
              >
                Clear Cart
              </button>
            )}
          </h2>

          {cartItems.length === 0 && (
            <div className="flex justify-center items-center text-lg font-bold py-4">
              No items are added.
            </div>
          )}

          {cartItems.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between py-4 px-4 border-gray-500"
            >
              <div className="flex items-center">
                <img
                  className="w-24 h-auto mr-10"
                  src={product.image}
                  alt={product.title}
                />
                <div className="ml-4 flex flex-col">
                  <span className="text-lg font-bold">{product.title}</span>
                  <span className="mt-1">
                    {product.quantity} * ${product.price}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 align-center">
                <button
                  className="bg-black text-white pt-1 pb-2 px-2 rounded hover:bg-gray-500"
                  onClick={() => onAddProduct(product)}
                >
                  +
                </button>
                <button
                  className="bg-gray-400 text-white pt-1 pb-2 px-2 rounded hover:bg-gray-200"
                  onClick={() => onRemoveProduct(product)}
                >
                  -
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 pt-4 border-gray-300 mt-2 text-lg font-bold">
            <span>Total Price</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
