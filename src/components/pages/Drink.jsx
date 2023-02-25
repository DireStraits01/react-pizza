import React from 'react';

import style from './Drink.module.css';
function Drink() {
  return (
    <>
      <div className="drink-body">
        <img src="/img/drinks/sprite.png" alt="" />
        <h4>Sprite</h4>
        <div className="priceBtn">
          <p>
            $ <span>8</span>
          </p>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Drink;
