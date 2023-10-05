

const ProductItem = ({url, name}) => {
return (
<article className="producto">
<img src={url} alt={name} className="imagen"/>
<div>
    <button>Carrito</button>
    <button>Ver mas</button>
</div>
</article>
);
};

export default ProductItem;