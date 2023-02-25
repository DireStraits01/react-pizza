import Drink from './Drink';
import { drinks } from '../data/data';
import style from './Drink.module.css';

function DrinksList() {
  return (
    <>
      <div className={style.drinksCart}>
        {drinks.map((drink) => (
          <div className={style.drinkItem}>
            <Drink drink={drink} />
          </div>
        ))}
      </div>
    </>
  );
}

export default DrinksList;
