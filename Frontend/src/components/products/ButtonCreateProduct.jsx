import React from "react";
import useUserLogin from "../../store/useUserLogin";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

// Estilo para el contenedor de ButtonCreateProduct
const ButtonCreateProductContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

// Estilo para el botón en ButtonCreateProduct
const CreateProductButton = styled.button`
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

// const ButtonCreateProduct = () => {
//     const renderActionButton = () => {

//         const navigate = useNavigate();
//         const { user } = useUserLogin();

//         if (user.rol === "admin") {

//             return <button onClick={() => navigate("/crear")}>Crear producto</button>

//         }

//     };


//     return (
//         <div>

//             {renderActionButton()}

//         </div>
//     );
// };

// export default ButtonCreateProduct;