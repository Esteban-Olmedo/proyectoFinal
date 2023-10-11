import { Link } from "react-router-dom";
import useCart from "../store/useCart";
import styled from 'styled-components';
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #0B3954;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ClearButton = styled.button`
  background-color: #FF5A5F;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 4px;

  &:hover {
    background-color: #087E8B;
  }
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProductItem = styled.li`
  margin-bottom: 10px;
`;

const RemoveButton = styled.button`
background-color: black;
color: white;
border: none;
padding: 3px 8px;
font-size: 12px;
cursor: pointer;
border-radius: 4px;

&:hover {
  background-color: #087E8B;
}
`;

const LinkToCheckout = styled(Link)`
  text-decoration: none;
  background-color: #C81D25;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #087E8B;
  }
`;


const Cart = () => {
  
  const { cart, clearCart, removeProduct } = useCart(); 

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  return (
    <Container>
      <Title>Carrito de Compras</Title>
      <ClearButton onClick={() => clearCart()}>Limpiar carrito</ClearButton>
      <ProductList>
        {cart.map((product) => (
          <ProductItem key={product.id}>           
            Id: {product.id}, Nombre: {product.name}, Cantidad: {product.cantidad}
            {/* <button onClick={() => handleRemoveProduct(product.id)}>Eliminar</button> */}
            <RemoveButton onClick={() => handleRemoveProduct(product.id)}>Eliminar</RemoveButton>   
          </ProductItem>
        ))}
      </ProductList>
      <LinkToCheckout to={"/comprar"}>COMPRAR</LinkToCheckout>
    </Container>
  );
};

export default Cart;


// const Cart = () => {
//   const { cart, clearCart } = useCart();

//   console.log(cart);
//   return (
//     <>
       
//       <h1>Carrito de Compras</h1>
      
//       <button onClick={() => clearCart()}>Limpiar carrito</button>
//       <ul>
//         {cart.map((product) => (
//             <li key={product.id}>
//             Id:{product.id}, Nombre: {product.nombre}, cantidad:{" "}
//             {product.cantidad}
//           </li>
//         ))}
//       </ul>
        
//       <Link to="/finalizar-compra">Ir a pagar</Link>
//     </>
//   );
// };

// export default Cart;