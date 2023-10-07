import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  width: 240px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CardName = styled.h2`
  font-size: 18px;
  margin: 8px 0;
`;

const CardPrice = styled.p`
  font-size: 16px;
  margin: 8px 0;
`;

const CardSize = styled.p`
  font-size: 14px;
  margin: 8px 0;
`;

const CardCategorie = styled.p`
  font-size: 14px;
  margin: 8px 0;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

const ProductCard = ({ product }) => {
    const handleAddClick = () => {
        //Agrega aquí la lógica para procesar la compra o cualquier acción deseada al hacer clic en "Comprar"
        alert(`Producto ${product.name} agregado.`);
    };
    
    return (
        <CardContainer>
      <CardImage src={product.url} alt={product.name} />
      <CardName>{product.name}</CardName>
      <CardPrice>${product.price}</CardPrice>
      <CardSize>{product.size}</CardSize>
      <CardCategorie>Categoría: {product.categorie}</CardCategorie>
      <AddButton onClick={handleAddClick}>Agregar</AddButton>
    </CardContainer>
  );
};

export default ProductCard;

/////////////////////////////////////////////////////////////

// import React from "react";


// const ProductCard = ({ producto }) => {
//   return (
//     <div >
//       <img
//         src={producto.image}
//         alt={producto.title}
//         className={styles.productImage}
//       />
//       <h2 >{producto.name}</h2>
//       <p >${producto.price}</p>
//       <p >{producto.size}</p>
//       <p >Categoría: {producto.categorie}</p>
//       <button >Comprar</button>
//     </div>
//   );
// };

// export default ProductCard;

