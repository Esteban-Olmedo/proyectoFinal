import { useEffect, useState } from 'react'
//import './App.css'
import CardProducts from './components/CardProducts';
import Header from './components/Header';
import Footer from './components/Footer'
import ProductItem from './components/products/ProductItem';
import React from 'react';
import FormLogin from './components/login/FormLogin';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Home from './components/Home';
// import Login from './components/Login';
// import Cart from './components/Cart';
// import Register from './components/Register';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Header />
      <main className="container">
        <section className="card">
        
        <FormLogin />
        
        </section>
      </main>
      <Footer />

    </>
  );


};

export default App


// const [count, setCount] = useState(0);
// const [test, setTest] = useState("");
// const [products, setProducts] = useState([]);

// useEffect(() => {
//   fetch("/api/test")
//   .then((res) => res.text())
//   .then((data) => setTest(data));
// }, []);

// useEffect(() => {
//   fetch("/api/test")
//   .then((response) => response.json())
//   .then((data) => setProducts(data));
// }, []);


// return (
//   <>
//     <div>
//          {products.map((products) => (
//       <CardProducts key={products.id} name={products.name} price={products.price} size={products.size} categorie={products.categorie} />
//     ))}
//     </div>
//   </>
// )