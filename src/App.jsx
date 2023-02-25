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
                cart={cart}
                setCart={setCart}
                cartCost={cartCost}
                setCartCost={setCartCost}
                cartCount={cartCount}
                setCartCount={setCartCount}
              />
            }
          />
          <Route
            path="/drinks"
            element={<DrinksList cart={cart} setCart={setCart} />}
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
