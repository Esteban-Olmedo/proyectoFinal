import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Register from "./pages/Register";
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import Order from './pages/Order';



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
        

        
          <Route
            path="/login"
            element={<Login />}>
          </Route>
       

        
          <Route
            path="/cart"
            element={
             
            <Cart />
           
            }>
          </Route>
       

        
          <Route
            path="/register"
            element={<Register />}>
          </Route>
       

        
          <Route
            path="/comprar"
            element={<Order />}>
          </Route>
        
        <Route
            path="/crear"
            element={<CreateProduct />}>
          </Route>

          <Route
            path="/editar/:id"
            element={<EditProduct />}>
          </Route>

       
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


