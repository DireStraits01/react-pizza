import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout({
  cart,
  setCart,
  cartCost,
  setCartCost,
  cartCount,
  setCartCount,
  // items,
  // setItems,
}) {
  return (
    <>
      <Navbar
        cart={cart}
        setCart={setCart}
        cartCost={cartCost}
        setCartCost={setCartCost}
        cartCount={cartCount}
        setCartCount={setCartCount}
        // items={items}
        // setItems={setItems}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
