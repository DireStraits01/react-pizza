import React from 'react';
import Deserts from './Deserts';
import { desserts } from '../data/data';
import style from './Desserts.module.css';

function DessertList({
  handleAddtoCart,
  setCartCost,
  cartCount,
  cartCost,
  setCartCount,
}) {
  return (
    <>
      <div className={style.dessertsRow}>
        {desserts.map((dessert, index) => (
          <div className={style.dessertCart} key={index}>
            <Deserts
              dessert={dessert}
              handleAddtoCartDrink={handleAddtoCart}
              cartCost={cartCost}
              setCartCost={setCartCost}
              cartCount={cartCount}
              setCartCount={setCartCount}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default DessertList;
