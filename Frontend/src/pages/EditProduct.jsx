
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import useCart from "../../store/useCart";
// import styled from "styled-components";

// const EditProductContainer = styled.div`
//   background-color: #fff;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 20px;
//   margin: 10px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const EditProductButton = styled.button`
//   background-color: #087e8b;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   padding: 10px 20px;
//   cursor: pointer;
//   font-size: 16px;
//   transition: background-color 0.2s ease;

//   &:hover {
//     background-color: #c81d25;
//   }
// `;

// const EditProduct = () => {
//   const { productId } = useParams(); // Obtener el ID del producto a editar
//   const [product, setProduct] = useState(/* Obten el producto con el ID proporcionado */);
//   const { addProduct } = useCart();

//   const handleUpdateProduct = () => {
//     // Implementa la lógica para actualizar el producto en la base de datos o en tu estado.
//   };

//   return (
//     <EditProductContainer>
//       {/* Renderiza los campos de edición del producto */}
//       <h2>Editar Producto</h2>
//       {/* Agrega los campos para editar el producto, como nombre, precio, tamaño, categoría, etc. */}
//       <EditProductButton onClick={handleUpdateProduct}>Guardar Cambios</EditProductButton>
//     </EditProductContainer>
//   );
// };

// export default EditProduct;

////////////////////////////////////////

// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// const Comprar = () => {
//     return(
//         <h1>Comprar</h1>
//     )
// };

// export default Comprar;