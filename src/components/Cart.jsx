import React from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import style from './Navbar.module.css';
function Cart({ cart, setCart }) {
  return (
    <>
      <div className={style.iteminCartWraper}>
        <img src={cart.img} alt="" height={150} />
        <div className={style.iteminCartInfo}>
          <div className={style.itemInCartTextInfo}>
            <h3>{cart.title}</h3>
            <p>{cart.size}&nbsp;</p>
          </div>
          <div className={style.iteminCartPriceInfo}>
            <span>{cart.price}</span>
            <div className={style.iteminCartCount}>
              <div className={style.iconForCount}>
                {' '}
                <AiOutlinePlus />
              </div>

              <span>{cart.count}</span>
              <div className={style.iconForCount}>
                {' '}
                <AiOutlineMinus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
