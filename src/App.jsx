import { v4 as uuid } from 'uuid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CarouselBar from './components/CarouselBar';
import Footer from './components/Footer';
import PizzaList from './components/pages/PizzaList';
import Contacts from './components/pages/Contacts';
import DrinksList from './components/pages/DrinksList';
import Deserts from './components/pages/Deserts';

function App() {
  const [cart, setCart] = useState([]);
  const [cartCost, setCartCost] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const unique_id = uuid(); // funtion for unique id
  /*function add pizza to cart or increasing units in the cart if such a product is already available*/
  const handleAddtoCart = (img, title, price, size, dough) => {
    if (cart.length > 0) {
      let exist = false;
      setCart(
        cart.map((el) => {
          if (el.title === title && el.price === price && el.dough === dough) {
            exist = true;
            return { ...el, count: el.count + 1 };
          } else {
            return el;
          }
        })
      );
      if (!exist) {
        setCart([
          ...cart,
          {
            id: unique_id,
            img: img,
            title: title,
            price: price,
            count: 1,
            size: size,
            dough: dough,
          },
        ]);
      }
    } else {
      setCart([
        {
          id: unique_id,
          img: img,
          title: title,
          price: price,
          count: 1,
          size: size,
          dough: dough,
        },
      ]);
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar
          cart={cart}
          setCart={setCart}
          cartCost={cartCost}
          setCartCost={setCartCost}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
        <CarouselBar />
        <Routes>
          <Route
            index
            element={
              <PizzaList
                cartCost={cartCost}
                setCartCost={setCartCost}
                cartCount={cartCount}
                setCartCount={setCartCount}
                handleAddtoCart={handleAddtoCart}
              />
            }
          />
          <Route
            path="/drinks"
            element={
              <DrinksList
                handleAddtoCart={handleAddtoCart}
                cartCost={cartCost}
                setCartCost={setCartCost}
                cartCount={cartCount}
                setCartCount={setCartCount}
              />
            }
          />
          <Route path="deserts" element={<Deserts />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="/" element={<Footer />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
