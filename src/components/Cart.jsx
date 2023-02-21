import React from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { CiCircleRemove } from 'react-icons/ci';
import style from './Navbar.module.css';
function Cart({ cart, setCart, cartArray, setCartCost, cartCost }) {
  const pizzaHandleCartMinus = (cart, priceItem) => {
    if (cart.count < 2) {
      return setCart(cartArray.filter((itemCart) => itemCart.id !== cart.id));
    } else {
      setCart(
        cartArray.map((cartItem) => {
          if (cartItem.id === cart.id) {
            return { ...cartItem, count: cartItem.count - 1 };
          } else {
            return cartItem;
          }
        })
      );
    }

    const newCost = cartCost - priceItem;
    setCartCost(newCost);
  };

  const pizzaHandleCartPlus = (cart, priceItem) => {
    setCart(
      cartArray.map((cartItem) => {
        if (cart.id === cartItem.id) {
          return { ...cartItem, count: cartItem.count + 1 };
        } else {
          return cartItem;
        }
      })
    );
    const newCost = cartCost + priceItem;
    setCartCost(newCost);
  };

  return (
    <>
      <div className={style.iteminCartWraper}>
        <img src={cart.img} alt="" height={60} />
        <div className={style.iteminCartInfo}>
          <div className={style.itemInCartTextInfo}>
            <h5>{cart.title}</h5>
            <p>
              {cart.dough}&nbsp;dough&nbsp;,{cart.size}&nbsp;size.
            </p>
          </div>
          <hr />
          <div className={style.iteminCartPriceInfo}>
            <span>${cart.price * cart.count}</span>
            <div className={style.iteminCartCount}>
              <div
                className={style.iconForCount}
                onClick={() => pizzaHandleCartMinus(cart, cart.price)}
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
                onClick={() => pizzaHandleCartPlus(cart, cart.price)}
              >
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        </div>
        <CiCircleRemove
          className={style.CiCircleRemove}
          onClick={() => {
            setCart(cartArray.filter((item) => item.id !== cart.id));
            setCartCost(cartCost - cart.price * cart.count);
          }}
        />
      </div>
    </>
  );
}

export default Cart;
