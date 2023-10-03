import { useEffect, useState } from 'react'
import './App.css'
import CardProducts from './components/CardProducts';


function App() {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState("");
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("/api/test")
  //   .then((res) => res.text())
  //   .then((data) => setTest(data));
  // }, []);

  useEffect(() => {
    fetch("/api/test")
    .then((response) => response.json())
    .then((data) => setProducts(data));
  }, []);


  return (
    <>
      <div>
           {products.map((products) => (
        <CardProducts key={products.id} name={products.name} price={products.price} size={products.size} categorie={products.categorie} />
      ))}
      </div>
    </>
  )
}

export default App
