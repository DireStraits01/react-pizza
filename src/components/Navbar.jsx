import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import style from './Navbar.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import Cart from './Cart';

function Navbar({ cart, setCart }) {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const handleBtnMenu = (btn, setBtn) => {
    setBtn(!btn);
    console.log('dd');
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
        <div className={style.cartIcon}>
          <NavLink to="/#" className={style.cart__btn}>
            <FaShoppingCart
              onClick={() => handleBtnMenu(openCart, setOpenCart)}
            />
          </NavLink>
          <div className={`${style.cart} ${openCart ? style.open : ''}`}>
            {cart.map((itemInCart, index) => {
              return <Cart cart={itemInCart} key={index} setCart={setCart} />;
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
