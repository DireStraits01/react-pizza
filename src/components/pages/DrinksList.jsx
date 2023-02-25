import Drink from './Drink';
import { drinks } from '../data/data';
import style from './Drink.module.css';

function DrinksList({ cart, setCart }) {
  return (
    <>
      <div className={style.drinksCart}>
        {drinks.map((drink, index) => (
          <div className={style.drinkItem} key={index}>
            <Drink drink={drink} />
          </div>
        ))}
      </div>
    </>
  );
}

export default DrinksList;
