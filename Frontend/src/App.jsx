import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Register from "./pages/Register";
import Comprar from "./pages/Comprar";
import MainLayout from './layouts/MainLayout';



function App() {



  return (

    <>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route
            path="/"
            element={<Home />}>
          </Route>
        {/* </Routes> */}

        {/* <Routes> */}
          <Route
            path="/login"
            element={<Login />}>
          </Route>
        {/* </Routes> */}

        {/* <Routes> */}
          <Route
            path="/cart"
            element={
             
            <Cart />
           
            }>
          </Route>
        {/* </Routes> */}

        {/* <Routes> */}
          <Route
            path="/register"
            element={<Register />}>
          </Route>
        {/* </Routes> */}

        {/* <Routes> */}
          <Route
            path="/comprar"
            element={<Comprar />}>
          </Route>
        {/* </Routes> */}
        

        {/* <Routes> */}
          <Route
            path="*"
            element={
             
            <>
              <h1>Página no encontrada</h1>
              <Link to={"/"}>Ir al inicio</Link>
            </>
                      
          }>
          </Route>
          </Routes>
          <Footer/>
          
      </BrowserRouter>

    </>
  );




};

export default App


