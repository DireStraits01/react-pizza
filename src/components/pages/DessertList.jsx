import React from 'react';
import Deserts from './Deserts';
import { desserts } from '../data/data';
import style from './Desserts.module.css';

function DessertList() {
  return (
    <>
      <div className={style.dessertsRow}>
        {desserts.map((dessert, index) => (
          <div className={style.dessertCart} key={index}>
            <Deserts dessert={dessert} />
          </div>
        ))}
      </div>
    </>
  );
}

export default DessertList;
