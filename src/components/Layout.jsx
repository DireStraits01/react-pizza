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
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
