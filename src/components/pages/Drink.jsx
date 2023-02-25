import React from 'react';

import style from './Drink.module.css';
function Drink({ drink }) {
  return (
    <>
      <div className={style.drinkBody}>
        <img src={drink.img} alt="" style={{ height: '250px' }} />
        <h4>{drink.title}</h4>
        <div className={style.priceBtn}>
          <span> ${drink.price}</span>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Drink;
