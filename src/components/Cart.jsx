import React from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { CiCircleRemove } from 'react-icons/ci';
import style from './Navbar.module.css';
function Cart({ cart, setCart, cartArray }) {
  const pizzaHandleCartMinus = (cart) => {
    if (cart.count < 2) {
      return setCart(cartArray.filter((itemCart) => itemCart.id !== cart.id));
    } else {
      return setCart(
        cartArray.map((cartItem) => {
          if (cartItem.id === cart.id) {
            return { ...cartItem, count: cartItem.count - 1 };
          } else {
            return cartItem;
          }
        })
      );
    }
  };

  const pizzaHandleCartPlus = (cart) => {
    setCart(
      cartArray.map((cartItem) => {
        if (cart.id === cartItem.id) {
          return { ...cartItem, count: cartItem.count + 1 };
        } else {
          return cartItem;
        }
      })
    );
  };
  return (
    <>
      <div className={style.iteminCartWraper}>
        <img src={cart.img} alt="" height={150} />
        <div className={style.iteminCartInfo}>
          <div className={style.itemInCartTextInfo}>
            <h3>{cart.title}</h3>
            <p>{cart.size}&nbsp;</p>
            <p>{cart.dough}&nbsp;</p>
          </div>
          <div className={style.iteminCartPriceInfo}>
            <span>{cart.price}</span>
            <div className={style.iteminCartCount}>
              <div
                className={style.iconForCount}
                onClick={() => pizzaHandleCartMinus(cart)}
              >
                {cart.count < 2 ? (
                  <RiDeleteBin2Line className={style.iconMinus} />
                ) : (
                  <AiOutlineMinus />
                )}
              </div>

              <span>{cart.count}</span>
              <div
                className={style.iconForCount}
                onClick={() => pizzaHandleCartPlus(cart)}
              >
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        </div>
        <CiCircleRemove
          className={style.CiCircleRemove}
          onClick={() =>
            setCart(cartArray.filter((item) => item.id !== cart.id))
          }
        />
      </div>
    </>
  );
}

export default Cart;
