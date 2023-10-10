import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilo para el contenedor de CreateProduct
const CreateProductContainer = styled.div`
max-width: 1000px;
margin: 0 auto;
padding: 20px;
border: 1px solid #ccc;
border-radius: 5px;
background-color: #0B3954;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//   max-width: 400px;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   background-color: #0B3954;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//   text-align: center;
`;

// Estilo para el formulario en CreateProduct
const CreateProductForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// Estilo para los campos del formulario en CreateProduct
const CreateProductFormField = styled.div`
  margin-bottom: 20px;
`;

// Estilo para las etiquetas en CreateProduct
const CreateProductLabel = styled.label`
//   font-weight: bold;
  
`;

// Estilo para los campos de entrada en CreateProduct
const CreateProductInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Estilo para el mensaje de error en CreateProduct
const CreateProductError = styled.div`
  color: red;
  // font-weight: bold;
`;

// Estilo para el botón en CreateProduct
const CreateProductButton = styled.button`
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

function CreateProduct() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [producto, setProducto] = useState({
    name: '',
    price: '',
    size: '',
    categorie: '',
    url: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });

      if (!response.ok) {
        setProducto(false);
        return setError(true);
      }

      const data = await response.json();
      setProducto(data);
      navigate('/');
    } catch (error) {
      console.log({ error });
      setError(true);
    }
  };

  return (
    <CreateProductContainer>
      <h2>Crear Producto</h2>
      <CreateProductForm onSubmit={handleSubmit}>
        <CreateProductFormField>
          <CreateProductLabel htmlFor="name">Nombre:</CreateProductLabel>
          <CreateProductInput
            type="text"
            id="name"
            name="name"
            value={producto.name}
            onChange={handleChange}
          />
        </CreateProductFormField>
        <CreateProductFormField>
          <CreateProductLabel htmlFor="price">Precio:</CreateProductLabel>
          <CreateProductInput
            type="text"
            id="price"
            name="price"
            value={producto.price}
            onChange={handleChange}
          />
        </CreateProductFormField>
        <CreateProductFormField>
          <CreateProductLabel htmlFor="size">Talle:</CreateProductLabel>
          <CreateProductInput
            type="text"
            id="size"
            name="size"
            value={producto.size}
            onChange={handleChange}
          />
        </CreateProductFormField>
        <CreateProductFormField>
          <CreateProductLabel htmlFor="categorie">Categoría:</CreateProductLabel>
          <CreateProductInput
            type="text"
            id="categorie"
            name="categorie"
            value={producto.categorie}
            onChange={handleChange}
          />
        </CreateProductFormField>
        <CreateProductFormField>
          <CreateProductLabel htmlFor="url">URL:</CreateProductLabel>
          <CreateProductInput
            type="text"
            id="url"
            name="url"
            value={producto.url}
            onChange={handleChange}
          />
        </CreateProductFormField>
        {error && <CreateProductError>Error al cargar el usuario</CreateProductError>}
        <CreateProductButton type="submit">Crear Producto</CreateProductButton>
      </CreateProductForm>
    </CreateProductContainer>
  );
}

export default CreateProduct;


// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// function CreateProduct() {
//     const navigate = useNavigate();
//   const [error, setError] = useState(false);
//   const [producto, setProducto] = useState({
//     name: '',
//     price: '',
//     size: '',
//     categorie: '',
//     url: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProducto({ ...producto, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/productos', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(producto),
//       });

//       if (!response.ok) {
//         setProducto(false);
//         return setError(true);
//       }

//       const data = await response.json();
//       setProducto(data);
//       navigate("/");
//     } catch (error) {
//       console.log({ error });
//       setError(true);
//     }
    
//   };

//   return (
//     <div>
//       <h2>Crear Producto</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Nombre:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={producto.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="price">Precio:</label>
//           <input
//             type="text"
//             id="price"
//             name="price"
//             value={producto.price}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="size">Talle:</label>
//           <input
//             type="text"
//             id="size"
//             name="size"
//             value={producto.size}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="categorie">Categoría:</label>
//           <input
//             type="text"
//             id="categorie"
//             name="categorie"
//             value={producto.categorie}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="url">URL:</label>
//           <input
//             type="text"
//             id="url"
//             name="url"
//             value={producto.url}
//             onChange={handleChange}
//           />
//         </div>
//         {error && (
//             <div>
//               Error al cargar el usuario. 
//             </div>
//           )}
//         <button type="submit">Crear Producto</button>
//       </form>
//     </div>
//   );
// }

// export default CreateProduct;
