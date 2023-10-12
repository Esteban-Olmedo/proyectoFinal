
//import styled from "styled-components";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


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


const EditProducts = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    size: '',
    categorie: '',
    url: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  // console.log(productId)
  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/api/productos/" + productId, product);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  //console.log(product);
  return (
    <div>
      <h1>Actualizar Producto</h1>
      <input
        type="text"
        placeholder="name"
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="size"
        onChange={handleChange}
        name="size"
      />
      <input
        type="text"
        placeholder="categorie"
        onChange={handleChange}
        name="categorie"
      />
      <input
        type="text"
        placeholder="url"
        onChange={handleChange}
        name="url"
      />
      <button  onClick={handleClick}>
        Actualizar
      </button>
    </div>
  );
};
export default EditProducts;