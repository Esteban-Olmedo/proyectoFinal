import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserLogin from "../store/useUserLogin";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #0B3954; /* Cambio de color */
  border-radius: 4px;
  font-size: 1rem;
`;

const ErrorText = styled.p`
  color: black; /* Cambio de color */
`;

const SubmitButton = styled.button`
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

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0B3954; 
`;

const LoginForm = () => {
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { setIsLogged, setUser } = useUserLogin();
    const navigate = useNavigate();
  
    const onFinish = async (event) => {
      const { email, password } = event.target.elements;
      event.preventDefault();
      setLoading(true);
      setError(false);
      try {
        const response = await fetch("api/usuarios/login", { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),
        });

       
      
      if (!response.ok) {
        setLoading(false);
        return setError(true);
        // console.log(response)
      }
      
      const {data} = await response.json();
      console.log(data);
      setUser(data);
      setIsLogged(true);
      
        navigate("/");
      } catch (error) {
        console.log({ error });
        setError(true);
      }
      setLoading(false);
    };
  
    return (
      <Container>
        <Form onSubmit={onFinish}>
          <Input type="email" name="email" id="email" placeholder="Ingrese email" required />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            required
          />
          {error && (
            <ErrorText>
              Usuario o contraseña incorrectos. 
            </ErrorText>
          )}
          <SubmitButton type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Iniciar sesión"}
          </SubmitButton>
        </Form>
      </Container>
    );
  };
  
  export default LoginForm;


 


