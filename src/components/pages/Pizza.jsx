import Button from 'react-bootstrap/Button';
import style from './Pizza.module.css';

function Pizza({ pizza, handlePizzaModal, handleShow }) {
  return (
    <>
      <div className={style.pizzaCard}>
        <img src={pizza.img} alt="" onClick={handleShow} />
        <h3>{pizza.title}</h3>
        <p>{pizza.ingredients}</p>
        <div className={style.pizzaCard__footer}>
          <span className={style.pizzaCard__price}>${pizza.price.medium}</span>
          <Button
            onClick={() => {
              handleShow();

              handlePizzaModal(pizza);
            }}
          >
            show
          </Button>
        </div>
      </div>
    </>
  );
}

export default Pizza;
