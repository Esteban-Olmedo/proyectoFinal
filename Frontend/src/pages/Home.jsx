import { useEffect, useState } from 'react'
//import './App.css'
import CardProducts from './components/CardProducts';
import Header from './components/Header';
import Footer from './components/Footer'
import ProductItem from './components/products/ProductItem';
import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Home from './components/Home';
// import Login from './components/Login';
// import Cart from './components/Cart';
// import Register from './components/Register';


function Home() {
  const [count, setCount] = useState(0);

  return (
<>

<Header/>
<section className="filauno">
<ProductItem url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1GkDvpThFBKyIlBwOyz69TNKz4NN9exTMw&usqp=CAU" name="pikachu" />
<ProductItem url="https://acdn.mitiendanube.com/stores/110/201/products/medias-sm1-138ec577f11864a9a816292413786261-640-0.jpg" name="sailormoon" />
<ProductItem url="https://acdn.mitiendanube.com/stores/806/999/products/medias-homero-arbusto1-a30eda5372d448825016611274879287-1024-1024.jpg" name="lossimpson" />
<ProductItem url="https://briganti.com.ar/cdn/shop/products/ACC072813011.jpg?v=1658847103" name="negras" />
</section>
<section className="filados">
<ProductItem url="https://http2.mlstatic.com/D_NQ_NP_869443-MLA50806019045_072022-O.webp" name="rayas" />
<ProductItem url="https://down-co.img.susercontent.com/file/93224bf04fcd80ac646b5b67ac27fc5f" name="demonslayer" />
<ProductItem url="https://acdn.mitiendanube.com/stores/029/842/products/mario-y-luigi1-6e33147ebfdc0232ed16242258656732-640-0.jpg" name="mariobros" />
<ProductItem url="https://www.tiendaganga.com/wp-content/uploads/2022/10/medias-3-4-nubes.jpg" name="nubes" />
</section>
<Footer/>

</>
  );


};

export default Home;