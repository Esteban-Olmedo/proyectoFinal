import React from "react";
import useCart from "../../store/useCart";
import useUserLogin from "../../store/useUserLogin";
// import useCheckLogin from "../../hooks/useCheckLogin"





const ProductCard = ({ product,  }) => {
  // const { cart, setCart } = useCart();
  // const handleAddCart = () => {
  //   setCart([...cart, { ...product, cantidad: 1 }]); 
  // };
  const { isLogged, rol, setRol } = useUserLogin();
  const { cart, setCart } = useCart(); 
  const handleAddToCart = () => {
    if (isLogged) {
      setCart([...cart, product]); 
      alert(`Producto "${product.name}" agregado al carrito`);
    } else {
      alert("Debes iniciar sesión para agregar productos al carrito.");
    }
  };
  const handleEditProduct = () => {
    if (isLogged && setRol("admin")) {
      alert(`Editando el producto "${product.name}"`);
    } else {
      alert("No tienes permisos para editar este producto.");
    }
  };
  return (
    <div>
      <img alt={product.url} src={product.url} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.size}</p>
      <p>Categorie: {product.categorie}</p>
      {isLogged && (
        <>
          {setRol("admin") ? (
            <button onClick={handleEditProduct}>Editar</button>
          ) : (
            <button onClick={handleAddToCart}>Agregar al Carrito</button>
          )}
        </>
      )}


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