import style from './Pizza.module.css';
import pz from './img/cheese.png';
function Pizza() {
  return (
    <>
      <div className={style.row}>
        <div className={style.pizzaCard}>
          <img src={pz} alt="" />
          <h3>Margarita</h3>
          <p>
            Запеченная буженина из свинины, клюквенный соус, брусника, красный
            лук, моцарелла, фирменный соус альфредо
          </p>
          <div className={style.pizzaCard__footer}>
            <span className={style.pizzaCard__price}>$23</span>
            <button>add</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pizza;
