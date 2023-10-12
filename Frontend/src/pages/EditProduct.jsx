
import styled from "styled-components";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #0B3954;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorText = styled.p`
  color: #C81D25;
`;

const Button = styled.button`
  background-color: #C81D25;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #087E8B;
  }
`;

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

  return (
    <Container>
      <h1>Actualizar Producto</h1>
      <Form>
        <FormGroup>
          <Label>Nombre</Label>
          <Input
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            name="name"
            value={product.name}
          />
        </FormGroup>
        <FormGroup>
          <Label>Precio</Label>
          <Input
            type="number"
            placeholder="Precio"
            onChange={handleChange}
            name="price"
            value={product.price}
          />
        </FormGroup>
        <FormGroup>
          <Label>Tamaño</Label>
          <Input
            type="text"
            placeholder="Tamaño"
            onChange={handleChange}
            name="size"
            value={product.size}
          />
        </FormGroup>
        <FormGroup>
          <Label>Categoría</Label>
          <Input
            type="text"
            placeholder="Categoría"
            onChange={handleChange}
            name="categorie"
            value={product.categorie}
          />
        </FormGroup>
        <FormGroup>
          <Label>URL</Label>
          <Input
            type="text"
            placeholder="URL"
            onChange={handleChange}
            name="url"
            value={product.url}
          />
        </FormGroup>
        <Button onClick={handleClick}>Actualizar</Button>
      </Form>
    </Container>
  );
};

export default EditProducts;


