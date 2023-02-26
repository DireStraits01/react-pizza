import React from 'react';

import style from './Drink.module.css';
function Drink({
  drink,
  handleAddtoCartDrink,
  cartCost,
  setCartCost,
  cartCount,
  setCartCount,
}) {
  return (
    <>
      <div className={style.drinkBody}>
        <img src={drink.img} alt="" style={{ height: '250px' }} />
        <h4>{drink.title}</h4>
        <div className={style.priceBtn}>
          <span> ${drink.price}</span>
          <button
            onClick={() => {
              handleAddtoCartDrink(drink.img, drink.title, drink.price);
              setCartCost(cartCost + drink.price);
              setCartCount(cartCount + 1);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Drink;
