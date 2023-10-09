
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #0B3954;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;


const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones necesarias
  };

  return (
    <Container>
      <h2>Registro</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nombre de usuario</Label>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </FormGroup>
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
        <Button type="submit">Registrarse</Button>
      </Form>
    </Container>
  );
};

export default Register;
