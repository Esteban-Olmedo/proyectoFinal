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
  background-color: #C81D25; /* Cambio de color */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #BFD7EA; /* Cambio de color */
    color: #087E8B; /* Cambio de color */
    border: 1px solid black; /* Cambio de color */
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #087E8B; /* Cambio de color de fondo */
`;

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { setIsLogged, setUser } = useUserLogin();
    const navigate = useNavigate();
  
    const onFinish = async (event) => {
      event.preventDefault();
      const { username, password } = event.target.elements;
      setLoading(true);
      setError(false);
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username.value,
            password: password.value,
          }),
        });
  
        if (!response.ok) {
          setLoading(false);
          return setError(true);
        }
  
        const data = await response.json();
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
          <Input type="email" name="email" placeholder="Ingrese email" required />
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
          />
          {error && (
            <ErrorText>
              Usuario o contraseña incorrectos. 
            </ErrorText>
          )}
          <SubmitButton type="submit" disabled={loading}>
            Iniciar sesión
          </SubmitButton>
        </Form>
      </Container>
    );
  };
  
  export default LoginForm;





// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// const Login = () => {

//     return (
//         <>
//         <h1>Login</h1>
//         </>
//     );
// };

//export default Login;