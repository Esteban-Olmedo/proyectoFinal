import React from 'react';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";
// import Register from "./pages/Register";
import Footer from './components/Footer';
import Header from './components/Header';



//import { useEffect, useState } from 'react'
//import './App.css'








function App() {
  //const [count, setCount] = useState(0);


  return (
    
    <>
    
   <h1>App</h1>
   <Header/> 
   <Footer/>
   

      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              <MainLayout>
                <Login />
              </MainLayout>
            }
          />
          <Route
            path="/cart"
            element={
              <MainLayout>
                <Cart/>
              </MainLayout>
            }
          />
          <Route
            path="/register"
            element={
              <MainLayout>
                <Register/>
              </MainLayout>
            }
          />
           <Route
            path="/finalizar-compra"
            element={
              <MainLayout>
                <h1>Page jeje</h1>
                <h2>Ingrese los datos de envio</h2>
              </MainLayout>
            }
          />
          <Route
            path="*"
            element={
              <>
                <h1>Página no encontrada</h1>
                <Link to={"/"}>Ir al inicio.</Link>
              </>
            }
          />
        </Routes>
      </BrowserRouter> */}
      
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