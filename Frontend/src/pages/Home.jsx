import React from "react";
import { useEffect, useState } from "react";
import useCheckLogin from "../hooks/useCheckLogin";
import useUserLogin from "../store/useUserLogin";
import ProductGrid from "../components/products/ProductGrid";
import ButtonCreateProduct from "../components/products/ButtonCreateProduct";
import styled from 'styled-components';


const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
background-color: #0B3954;

`;


const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
    <HomeContainer>
      <SearchInput
        type="text"
        placeholder="Buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredProducts ? <ProductGrid products={filteredProducts} /> : null}
      {user.rol === "admin" && <ButtonCreateProduct />}
    </HomeContainer>
  );
};

export default Home;

