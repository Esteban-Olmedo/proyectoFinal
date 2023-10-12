import React from "react";
import useUserLogin from "../../store/useUserLogin";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


const ButtonCreateProductContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;


const CreateProductButton = styled.button`
  background-color: #04724D;
  // background-color: #C81D25;
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

const ButtonCreateProduct = () => { 
  const navigate = useNavigate();
  const { user } = useUserLogin();

  const handleCreateProductClick = () => {
    navigate("/crear");
  };

  const renderActionButton = () => {
    if (user.rol === "admin") {
      return <CreateProductButton onClick={handleCreateProductClick}>Crear producto</CreateProductButton>;
    }
  };

  return (
    <ButtonCreateProductContainer>
      {renderActionButton()}
    </ButtonCreateProductContainer>
  );
};

export default ButtonCreateProduct;

