import React from "react";
import useCart from "../../store/useCart";
import useUserLogin from "../../store/useUserLogin";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Estilo para el contenedor de ProductCard
const ProductCardContainer = styled.div`
  background-color: #087E8B;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; // Centrar contenido verticalmente
`;

const LinkToEdit = styled(Link)`
background-color: #c81d25;
color: #fff;
border: none;
border-radius: 5px;
padding: 10px 20px;
cursor: pointer;
font-size: 16px;
transition: background-color 0.2s ease;

&:hover {
  background-color: #087e8b;
}
`;

// Estilo para el botón en ProductCard
const ProductCardButton = styled.button`
  background-color: #c81d25;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #087e8b;
  }
`;

// Estilo para la imagen en ProductCard
const ProductCardImage = styled.img`
  max-width: 100%; // Asegura que la imagen no se desborde del contenedor
  max-height: 200px; // Altura máxima deseada para las imágenes
  object-fit: cover; // Escalar la imagen para llenar el contenedor
`;


const ProductCard = ({ product }) => {
  const { addProduct } = useCart();
  const { user } = useUserLogin();

  const handleAddCart = () => {
    addProduct(product);
  };

  const renderActionButton = () => {
    if (user.rol === "admin") {
      return <LinkToEdit to={`/editar/${product.id}`}>Editar</LinkToEdit>
      // return <ProductCardButton>Editar</ProductCardButton>;
    } else {
      return (
        <ProductCardButton onClick={handleAddCart}>
          Agregar al carrito
        </ProductCardButton>
      );
    }
  };

  return (
    <ProductCardContainer>
      <ProductCardImage alt={product.url} src={product.url} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Talle: {product.size}</p>
      <p>Categoria: {product.category}</p>
      {renderActionButton()}
    </ProductCardContainer>
  );
};

// Estilo para el contenedor de ProductGrid
const ProductGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// Aplicar estilos al componente ProductGrid
const ProductGrid = ({ products }) => {
  return (
    <ProductGridContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGridContainer>
  );
};

export default ProductGrid;






// const ProductCard = ({ product  }) => {
//   const { addProduct } = useCart();
//   const {user} = useUserLogin();
  
//   const handleAddCart = () => {
//     addProduct(product);
//   };
//   const renderActionButton = () => {
//     if (user.rol === "admin") {
      
//       return <button>Editar</button>;
//     } else {
      
//       return <button onClick={handleAddCart}>Agregar al carrito</button>;
//     }
//   };

 
//   return (
//     <div>
//       <img alt={product.url} src={product.url} />
//       <h2>{product.name}</h2>
//       <p>Precio: ${product.price}</p>
//       <p>Talle: {product.size}</p>
//       <p>Categoria: {product.categorie}</p>
      
//       {renderActionButton()} 


//     </div>
//   );
// };
// const ProductGrid = ({ products }) => {
  
//   return (
//     <div >
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//         ))}
        
      
//     </div>
//   );
// };
// export default ProductGrid;