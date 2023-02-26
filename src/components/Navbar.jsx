import { FaReact } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { GiFullPizza } from 'react-icons/gi';
import { FaGlassWhiskey } from 'react-icons/fa';
import { GiCupcake } from 'react-icons/gi';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { MdDeliveryDining } from 'react-icons/md';
import React, { useState } from 'react';
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
  const handleCartMenu = (btn, setBtn) => {
    setBtn(!btn);
    console.log('cart');
  };

  return (
    <>
      <div className={style.infoHeader}>
        <p>
          <MdDeliveryDining style={{ fontSize: '20px' }} /> Average delivery
          time this week
          <span className={style.bestTimeDelivery}> 00:26:28</span>
        </p>
        <span>Tel:(703) 256-0800</span>
      </div>
      <header>
        <div className={style.logo}>
          <FaReact className={style.logo__icon} />

          <span>React Pizza</span>
        </div>
        <ul className={`${style.navbar} ${openBurgerMenu ? style.open : ''}`}>
          <li>
            <NavLink to="/" className={style.navlink}>
              <GiFullPizza className={style.iconMenu} /> Pizza
            </NavLink>
          </li>
          <li>
            <NavLink to="drinks" className={style.navlink}>
              <FaGlassWhiskey className={style.iconMenu} />
              Drinks
            </NavLink>
          </li>
          <li>
            <NavLink to="deserts" className={style.navlink}>
              <GiCupcake className={style.iconMenu} />
              Desserts
            </NavLink>
          </li>
          <li>
            <NavLink to="contacts" className={style.navlink}>
              <TfiHeadphoneAlt className={style.iconMenu} /> Contact
            </NavLink>
          </li>
        </ul>
        <div>
          <NavLink
            to="#"
            className={`${
              cartCount > 0 ? style.cartIconBtn : style.cartIconBtnNull
            } `}
            onClick={() => handleCartMenu(openCart, setOpenCart)}
          >
            <span className={style.cartIcon}>
              <FaShoppingCart />
            </span>
            <span
              className={`${
                cartCount > 0 ? style.cartCount : style.cartCountNull
              }`}
            >
              {cartCount}
            </span>
          </NavLink>
          <div className={`${style.cart} ${openCart ? style.open : ''}`}>
            <div className={style.cartScroll}>
              {cart.length > 0 ? (
                cart.map((itemInCart, index) => {
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
                })
              ) : (
                <div className={style.ifCartEmpty}>
                  <img src="/img/empty-box.jpeg" alt="" width={'60%'} />
                  <p>oops...</p>
                </div>
              )}
            </div>
            <button>${cartCost} &#8594;</button>
          </div>
          <div className={style.burgerMenu} id={style.burgerMenu}>
            <GiHamburgerMenu
              onClick={() => handleCartMenu(openBurgerMenu, setOpenBurgerMenu)}
            />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
