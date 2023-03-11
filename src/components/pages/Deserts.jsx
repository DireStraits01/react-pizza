import style from './Desserts.module.css';

function Deserts({
  dessert,
  handleAddtoCartDrink,
  setCartCost,
  cartCount,
  cartCost,
  setCartCount,
}) {
  return (
    <>
      <div className={style.dessertMain}>
        <img src={dessert.img} alt="" />
        <div className={style.dessertBody}>
          <h3 className={style.title}>{dessert.title}</h3>
          <p className={style.description}>{dessert.description}</p>
          <div className={style.priceBtn}>
            <span> ${dessert.price}</span>
            <button
              onClick={() => {
                handleAddtoCartDrink(dessert.img, dessert.title, dessert.price);
                setCartCost(cartCost + dessert.price);
                setCartCount(cartCount + 1);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deserts;
