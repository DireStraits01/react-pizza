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
import { NavLink, Link } from 'react-router-dom';
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
  };

  return (
    <>
      <div className={style.infoHeader}>
        <p>
          <MdDeliveryDining style={{ fontSize: '20px' }} /> Average delivery
          time this week
          <span className={style.bestTimeDelivery}> 00:26:28</span>
        </p>
        <p>
          NY Tel:
          <span className={style.bestTimeDelivery}> (703) 256-0800</span>
        </p>

        <span>
          <p>
            Sunday-Saturday
            <span className={style.bestTimeDelivery}> 11:00 AM – 00:00 PM</span>
          </p>
        </span>
      </div>
      <header>
        <div className={style.logo}>
          <NavLink to="/">
            <FaReact className={style.logo__icon} />
            <span>React Pizza</span>
          </NavLink>
        </div>
        <ul className={`${style.navbar} ${openBurgerMenu ? style.open : ''}`}>
          <li>
            <NavLink
              end="true"
              to="/"
              className={style.navlink}
              onClick={() => {
                setOpenBurgerMenu(false);
                window.scrollTo(0, 0);
              }}
            >
              <GiFullPizza className={style.iconMenu} /> Pizza
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Drinks"
              className={style.navlink}
              onClick={() => {
                setOpenBurgerMenu(false);
                window.scrollTo(0, 0);
              }}
            >
              <FaGlassWhiskey className={style.iconMenu} />
              Drinks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="deserts"
              className={style.navlink}
              onClick={() => {
                setOpenBurgerMenu(false);
                window.scrollTo(0, 0);
              }}
            >
              <GiCupcake className={style.iconMenu} />
              Desserts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Contacts"
              className={style.navlink}
              onClick={() => {
                setOpenBurgerMenu(false);
                window.scrollTo(0, 0);
              }}
            >
              <TfiHeadphoneAlt className={style.iconMenu} /> Contacts
            </NavLink>
          </li>
        </ul>
        <div className={style.burgerMenuAndCart}>
          <div className={style.burgerMenu} id={style.burgerMenu}>
            <GiHamburgerMenu
              onClick={() => handleCartMenu(openBurgerMenu, setOpenBurgerMenu)}
            />
          </div>
          <div>
            <Link
              end="true"
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
            </Link>
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
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
