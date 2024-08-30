import React, { useState, useEffect } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import ProductCard from "../components/ProductCard";
import NavBar from "../components/NavBar";
import ProductModal from "../components/ProductModal";

const ProductPage = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productApiUrl = "https://fakestoreapi.com/products";
  const categoryApiUrl = "https://fakestoreapi.com/products/categories";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(productApiUrl);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(categoryApiUrl);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const filterByCategory = (categoryName) => {
    if (categoryName === "") {
      axios.get(productApiUrl).then((response) => setProducts(response.data));
    } else {
      axios
        .get(`${productApiUrl}/category/${categoryName}`)
        .then((response) => setProducts(response.data))
        .catch((error) => {
          console.error("Error fetching filtered products:", error);
        });
    }
    setSelectedCategory(categoryName);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsProductModalOpen(false);
  };

  return (
    <div className="flex">
      <div className="bg-black text-white p-5 pt-8 h-screen w-72 fixed left-0 top-0">
        <ul className="pt-2">
          <li
            onClick={() => filterByCategory("")}
            className="text-white text-m flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-[200px] mb-5"
          >
            All Categories
          </li>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => filterByCategory(category)}
              className="text-white text-m flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-2 mb-2"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 ml-72 p-8">
        <NavBar />
        <div className="pt-16 p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Product List</h1>
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4 mt-auto mb-auto mr-1 ml-1 px-4">
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                    onOpenModal={() => handleOpenModal(product)}
                  />
                ))
              ) : (
                <p className="text-center col-span-full">
                  No products available
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={isProductModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default ProductPage;
