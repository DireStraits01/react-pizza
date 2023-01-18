import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/deserts">Deserts</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        <div className={style.cart}>
          <Link to="/#" className={style.cart__btn}>
            <FaShoppingCart />
          </Link>
          <div className={style.burgerMenu} id={style.burgerMenu}>
            <GiHamburgerMenu onClick={handleBurgerMenu} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
