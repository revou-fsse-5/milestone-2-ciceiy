import "tailwindcss/tailwind.css";
import currency from "currency.js";

const formatCurrency = (amount) => currency(amount, { symbol: "$" }).format();

const ProductCard = ({ title, price, description, image, onOpenModal }) => {
  return (
    <div className="w-full p-4 flex flex-col">
      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md flex flex-col h-full">
        <div className="w-full h-48 flex justify-center items-center overflow-hidden">
          <img
            className="object-contain h-full w-full p-3"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h4 className="text-lg font-semibold mb-2">{title}</h4>
          <p className="text-xs text-gray-600 mb-3 h-30 overflow-hidden text-ellipsis">
            {description}
          </p>
          <h5 className="text-lg font-bold mb-4">{formatCurrency(price)}</h5>
          <button
            className="mt-auto px-4 py-2 bg-yellow-400 text-white font-semibold rounded-full shadow hover:bg-yellow-300 focus:outline-none"
            onClick={() => {
              onOpenModal();
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
