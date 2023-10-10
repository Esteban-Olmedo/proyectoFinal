
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
background-color: #0B3954;
  // max-width: 1000px;
  // margin: 0 auto;
  // padding: 20px;
  // border: 1px solid #ccc;
  // border-radius: 5px;
  // background-color: #0B3954;
  // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  // font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorText = styled.p`
  color: black; /* Cambio de color */
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


const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',    
    name: '',
    surname: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/usuarios/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setFormData(false);
        return setError(true);
      }

      const data = await response.json();
      setFormData(data);
      navigate("/");
    } catch (error) {
      console.log({ error });
      setError(true);
    }
    
  };


  return (
    <Container>
      <h2>Registro</h2>
      <Form onSubmit={handleSubmit}>
        
        <FormGroup>
          <Label>Correo electrónico</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña</Label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        
        <FormGroup>
          <Label>Nombre</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Apellido</Label>
          <Input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Dirección</Label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Teléfono</Label>
          <Input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>
        {error && (
            <ErrorText>
              Error al cargar el usuario. 
            </ErrorText>
          )}
        <Button type="submit">Registrarse</Button>
      </Form>
    </Container>
  );
};

export default Register;
