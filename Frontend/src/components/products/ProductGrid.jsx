import React from "react";
import useCart from "../../store/useCart";
import useUserLogin from "../../store/useUserLogin";






const ProductCard = ({ product  }) => {
  const { addProduct } = useCart();
  const {user} = useUserLogin();
  
  const handleAddCart = () => {
    addProduct(product);
  };
  const renderActionButton = () => {
    if (user.rol === "admin") {
      // Usuario admin, mostrar el botón de editar
      return <button>Editar</button>;
    } else {
      // Usuario cliente, mostrar el botón de agregar al carrito
      return <button onClick={handleAddCart}>Agregar al carrito</button>;
    }
  };

 
  return (
    <div>
      <img alt={product.url} src={product.url} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.size}</p>
      <p>Categoria: {product.categorie}</p>
      
      {renderActionButton()} {/* Renderizar el botón correspondiente */}


      {/* <button onClick={handleAddCart}>Agregar al carrito</button> */}

    </div>
  );
};
const ProductGrid = ({ products }) => {
  
  return (
    <div >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
        ))}
        
      
    </div>
  );
};
export default ProductGrid;