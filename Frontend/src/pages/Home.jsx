import React from "react";
import { useEffect, useState } from "react";
import useCheckLogin from "../hooks/useCheckLogin";
import useUserLogin from "../store/useUserLogin";
import ProductGrid from "../components/products/ProductGrid";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //useCheckLogin();
  const { user } = useUserLogin();
  useEffect(() => {
    fetch("/api/productos")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
        setFilteredProducts(data.data);
      });
  }, []);
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts(products);
      return;
    }
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    setFilteredProducts(filteredProducts);
  }, [searchTerm]);

  return (
    <>
      
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredProducts ? <ProductGrid products={filteredProducts} /> : null}
    </>
  );
};

export default Home;

