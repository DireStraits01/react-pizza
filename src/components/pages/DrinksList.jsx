import Drink from './Drink';
import { drinks } from '../data/data';
import style from './Drink.module.css';

function DrinksList({
  handleAddtoCart,
  cartCost,
  setCartCost,
  cartCount,
  setCartCount,
}) {
  return (
    <>
      <div className={style.drinksCart}>
        {drinks.map((drink, index) => (
          <div className={style.drinkItem} key={index}>
            <Drink
              drink={drink}
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

export default DrinksList;
