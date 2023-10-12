import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import useCart from '../store/useCart';
import useUserLogin from '../store/useUserLogin';



function Order() {
    const { cart } = useCart(); // Obtiene el carrito desde el estado global
    const { user } = useUserLogin(); // Obtiene los datos del usuario
    // const [error, setError] = useState(false);
    
  // Calcula el precio total de la orden
  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.cantidad;
  }, 0);

  const handleOrderConfirmation = async () => {

    // try {
    //   const response = await fetch('/api/orders', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(producto),
    //   });

    //   if (!response.ok) {
    //     setProducto(false);
    //     return setError(true);
    //   }

    //   const data = await response.json();
    //   setProducto(data);
    //   navigate('/');
    // } catch (error) {
    //   console.log({ error });
    //   setError(true);
    // }

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
        alert("orden creada")
        console.log(response.ok)
        // La orden se creó con éxito, puedes redirigir al usuario a una página de confirmación
        // o realizar otras acciones necesarias
      } else {
        // Manejar el caso en el que hubo un error al crear la orden
      }
    } catch (error) {
      console.error("Error al procesar la orden:", error);
    }
//////////////////////////////////////////
    // if (!response.ok) {
      
    //   return setError(true);
      
    // }
    
    // const {data} = await response.json();
    // //setUser(data);
    
    
    
    //   navigate("/");
    // } catch (error) {
    //   console.log({ error });
    //   setError(true);
    // }
 /////////////////////////////////////////////////  
  };
  return (
    <div>
      <h1>Confirmar Orden de Compra</h1>
      <h2>Detalles de la Orden:</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ({product.cantidad} x ${product.price})
          </li>
        ))}
      </ul>
      <p>Precio Total: ${totalPrice}</p>

      <h2>Datos del Usuario:</h2>     
      <p>Nombre: {user.name} {user.surname}</p>
      <p>Email: {user.email}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Dirección: {user.address}</p>

      <h2>Datos de Contacto Nuestros:</h2>
      <p>Correo de contacto: contacto@tucomercio.com</p>
      <p>Teléfono de contacto: +549123456789</p>
      <h2>Opciones de Envío:</h2>
      <label>
        <input type="radio" name="shippingType" value="retiro" /> Retiro por el local
      </label>
      <label>
        <input type="radio" name="shippingType" value="domicilio" /> Envío a domicilio
      </label>
      <h2>En caso de envio, ingrese la direccion de envio:</h2>
      <input type="text" /> 
      {/* <p>Direccion de envio: {user.address}</p> */}
      {/* Aquí debes agregar campos para la dirección de envío si el usuario selecciona "Envío a domicilio" */}
      <button onClick={handleOrderConfirmation}>Confirmar Compra</button>
    </div>
  );
}
export default Order;