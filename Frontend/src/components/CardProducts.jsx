import "./cardProducts.css"

function CardProducts({ name, price, size, categorie }) {
    return (
      <div className="cardProducts">
        <h1>{name}</h1>
        <h2>{price}</h2>
        <p>{size}</p>
        <p>{categorie}</p>
        <button>Agregar</button>
      </div>
    )
  };

  export default CardProducts;