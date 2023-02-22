import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import style from './Navbar.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import Cart from './Cart';

function Navbar({
  cart,
  setCart,
  cartCost,
  setCartCost,
  cartCount,
  setCartCount,
}) {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const handleBtnMenu = (btn, setBtn) => {
    setBtn(!btn);
  };

  return (
    <>
      <header>
        <div className={style.logo}>
          <AiFillHome className={style.logo__icon} />

          <span>Logo</span>
        </div>
        <ul className={`${style.navbar} ${openBurgerMenu ? style.open : ''}`}>
          <li>
            <NavLink to="/">Pizza</NavLink>
          </li>
          <li>
            <NavLink to="drinks">Drinks</NavLink>
          </li>
          <li>
            <NavLink to="deserts">Deserts</NavLink>
          </li>
          <li>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
        </ul>
        <div>
          <NavLink
            to="/#"
            className={style.cartIconBtn}
            onClick={() => handleBtnMenu(openCart, setOpenCart)}
          >
            <span className={style.cartIcon}>
              <FaShoppingCart />
            </span>
            <span className={style.cartCount}> {cartCount}</span>
          </NavLink>

          <div className={`${style.cart} ${openCart ? style.open : ''}`}>
            <span>${cartCost}</span>
            {cart.map((itemInCart, index) => {
              return (
                <Cart
                  cart={itemInCart}
                  key={index}
                  setCart={setCart}
                  cartArray={cart}
                  setCartCost={setCartCost}
                  cartCost={cartCost}
                  cartCount={cartCount}
                  setCartCount={setCartCount}
                />
              );
            })}
          </div>
          <div className={style.burgerMenu} id={style.burgerMenu}>
            <GiHamburgerMenu
              onClick={() => handleBtnMenu(openBurgerMenu, setOpenBurgerMenu)}
            />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
