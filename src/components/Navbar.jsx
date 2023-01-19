import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import style from './Navbar.module.css';
import { NavLink, Outlet } from 'react-router-dom';

function Navbar() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const handleBurgerMenu = () => {
    setOpenBurgerMenu(!openBurgerMenu);
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
        <div className={style.cart}>
          <NavLink to="/#" className={style.cart__btn}>
            <FaShoppingCart />
          </NavLink>
          <div className={style.burgerMenu} id={style.burgerMenu}>
            <GiHamburgerMenu onClick={handleBurgerMenu} />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
