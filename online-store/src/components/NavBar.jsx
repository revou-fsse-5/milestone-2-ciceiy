import "tailwindcss/tailwind.css";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-medium">Store</h1>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => navigate("/cart")}>
            <AiOutlineShoppingCart size={24} className="mr-6" />
          </button>
          <button onClick={() => navigate("/products")}>
            <AiOutlineHome size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
