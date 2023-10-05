import React, { useState } from "react";
import useUserStore from "../../store/useUserStore";

function FormLogin() {
  const [user, setUser] = useState("");
  const { saveUserName } = useUserStore();
  function handleSubmit() {
    saveUserName(user);
  }
  return (
    
    <form action="">
      <input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        type="text"
        placeholder="Ingrese Usuario"
      />
      
      <button onClick={handleSubmit} type="button">
        Enviar
      </button>
    </form>
    
  );
}

export default FormLogin;