import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <>
      <header>
        <div className={style.logo}>
          <AiFillHome className={style.logo__icon} />

          <span>Logo</span>
        </div>
        <ul className={style.navbar}>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">About us</a>
          </li>
          <li>
            <a href="/#">Services</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacts</a>
          </li>
        </ul>
        <div className={style.cart}>
          <a href="/#" className={style.cart__btn}>
            <FaShoppingCart />
          </a>
          <div className={style.burgerMenu} id={style.burgerMenu}>
            <GiHamburgerMenu />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
