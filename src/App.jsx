import { v4 as uuid } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PizzaList from './components/pages/PizzaList';
import Contacts from './components/pages/Contacts';
import DrinksList from './components/pages/DrinksList';
import Layout from './components/Layout';
import DessertList from './components/pages/DessertList';
import Order from './components/pages/Order';
import Authentication from './components/Authentication';
import useLocalStorage from './components/hooks/useLocalStorage';

function App() {
  const [cart, setCart] = useLocalStorage('cart', []);
  const [cartCost, setCartCost] = useLocalStorage('cartCost', 0);
  const [cartCount, setCartCount] = useLocalStorage('cartCount', 0);
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
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              cart={cart}
              setCart={setCart}
              cartCost={cartCost}
              setCartCost={setCartCost}
              cartCount={cartCount}
              setCartCount={setCartCount}
            />
          }
        >
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
            path="drinks"
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
          <Route
            path="deserts"
            element={
              <DessertList
                handleAddtoCart={handleAddtoCart}
                cartCost={cartCost}
                setCartCost={setCartCost}
                cartCount={cartCount}
                setCartCount={setCartCount}
              />
            }
          />
          <Route path="contacts" element={<Contacts />} />
          <Route
            path="order"
            element={
              <Order
                cart={cart}
                cartCost={cartCost}
                cartCount={cartCount}
                setCart={setCart}
                setCartCost={setCartCost}
                setCartCount={setCartCount}
              />
            }
          />
          <Route path="login" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
