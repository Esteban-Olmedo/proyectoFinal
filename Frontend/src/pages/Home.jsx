import React from "react";
import { useEffect, useState } from "react";
import useCheckLogin from "../hooks/useCheckLogin";
import useUserLogin from "../store/useUserLogin";
import ProductGrid from "../components/products/ProductGrid";
import ButtonCreateProduct from "../components/products/ButtonCreateProduct";
import styled from 'styled-components';

// Estilo para el contenedor de Home
const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
background-color: #0B3954;
  // max-width: 1000px;
  // margin: 0 auto;
  // padding: 20px;
  // background-color: #0B3954;
  // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

// Estilo para el campo de búsqueda
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

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
  
//   const { user } = useUserLogin();
//   useEffect(() => {
//     fetch("/api/productos")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data.data);
//         setFilteredProducts(data.data);
//       });
//   }, []);
//   useEffect(() => {
//     if (searchTerm === "") {
//       setFilteredProducts(products);
//       return;
//     }
//     const filteredProducts = products.filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
//     );
//     setFilteredProducts(filteredProducts);
//   }, [searchTerm]);

//   return (
//     <>
      
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {filteredProducts ? <ProductGrid products={filteredProducts} /> : null}
      
//       <div>
//         <ButtonCreateProduct/>
//       </div>
//     </>
//   );
// };

// export default Home;

