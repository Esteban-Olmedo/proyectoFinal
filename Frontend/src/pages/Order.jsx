import React from 'react';
import useCart from '../store/useCart';
import useUserLogin from '../store/useUserLogin';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #0B3954;
  color: black;
`;

const OrderTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const OrderSection = styled.div`
  margin: 20px 0;
`;

const OrderHeading = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const OrderList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const OrderListItem = styled.li`
  font-size: 16px;
  margin-bottom: 5px;
`;

const OrderTotalPrice = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

const OrderButton = styled.button`
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

const OrderInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Order = () => {
  const { cart } = useCart();
  const { user } = useUserLogin();

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.cantidad;
  }, 0);

  const handleOrderConfirmation = async () => {
    const orderData = {
      user_id: user.name,
      total_price: totalPrice,
    };

    console.log(orderData);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Orden creada");
        console.log(response.ok);
      } else {
        // Handle error
      }
    } catch (error) {
      console.error("Error al procesar la orden:", error);
    }
  };

  return (
    <Container>
      <OrderTitle>Confirmar Orden de Compra</OrderTitle>

      <OrderSection>
        <OrderHeading>Detalles de la Orden:</OrderHeading>
        <OrderList>
          {cart.map((product) => (
            <OrderListItem key={product.id}>
              {product.name} - ({product.cantidad} x U$S {product.price})
            </OrderListItem>
          ))}
        </OrderList>
        <OrderTotalPrice>Precio Total: U$S {totalPrice}</OrderTotalPrice>
      </OrderSection>

      <OrderSection>
        <OrderHeading>Datos del Usuario:</OrderHeading>
        <p>Nombre: {user.name} {user.surname}</p>
        <p>Email: {user.email}</p>
        <p>Teléfono: {user.phone}</p>
        <p>Dirección: {user.address}</p>
      </OrderSection>

      <OrderSection>
        <OrderHeading>Nuestros datos de contacto:</OrderHeading>
        <p>Correo: contacto@funnysocks.com</p>
        <p>Teléfono: +549123456789</p>
      </OrderSection>

      <OrderSection>
        <OrderHeading>Opciones de Envío:</OrderHeading>
        <label>
          <input type="radio" name="shippingType" value="retiro" /> Retiro por el local
        </label>
        <label>
          <input type="radio" name="shippingType" value="domicilio" /> Envío a domicilio
        </label>
      </OrderSection>

      <OrderSection>
        <p>En caso de envío, ingrese la dirección de envío:</p>
        <OrderInput type="text" />
      </OrderSection>

      <OrderButton onClick={handleOrderConfirmation}>Confirmar Compra</OrderButton>
    </Container>
  );
};

export default Order;


