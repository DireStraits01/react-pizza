import style from './Desserts.module.css';

function Deserts({ dessert }) {
  return (
    <>
      <div className={style.dessertMain}>
        <img src={dessert.img} alt="" />
        <div className={style.dessertBody}>
          <h3 className={style.title}>{dessert.title}</h3>
          <p className={style.description}>{dessert.description}</p>
          <span className={style.span}>${dessert.price}</span>
        </div>
      </div>
    </>
  );
}

export default Deserts;
