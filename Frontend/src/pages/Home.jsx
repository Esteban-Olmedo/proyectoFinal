import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import SearchBar from "../components/Searchbar/Searchbar";
import useCheckLogin from "../hooks/useCheckLogin";
import useUserLogin from "../store/useUserLogin";


const Home = () => {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  //useCheckLogin(); // ME LLEVA A LOGIN SIEMPRE
  const { user } = useUserLogin();

  useEffect(() => {
    fetch("/api/productos") // "api/productos" //https://fakestoreapi.com/products
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    setDataFiltered(data);
  }, [data]);

  const handleSearch = (term, size) => {
    console.log("Buscando:", term);
    let filtered;
    if (term) {
      filtered = data.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    // if (size) {
    //   filtered = data.filter((product) =>
    //   product.size.toLowerCase().includes(size.toLowerCase()) 
    //   );
    // }

    setDataFiltered(filtered);
  };

  return (
    <main className="bodyGlobal">
      <SearchBar onSearch={handleSearch} />
      <section className="container">
        {dataFiltered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;

