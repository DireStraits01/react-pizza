import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PizzaList from './components/pages/PizzaList';
import Contacts from './components/pages/Contacts';
import Drinks from './components/pages/Drinks';
import Deserts from './components/pages/Deserts';

function App() {
  const [cart, setCart] = useState([]);
  const [cartCost, setCartCost] = useState(0);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Navbar
                cart={cart}
                setCart={setCart}
                cartCost={cartCost}
                setCartCost={setCartCost}
              />
            }
          >
            <Route
              index
              element={
                <PizzaList
                  cart={cart}
                  setCart={setCart}
                  cartCost={cartCost}
                  setCartCost={setCartCost}
                />
              }
            />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="deserts" element={<Deserts />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
