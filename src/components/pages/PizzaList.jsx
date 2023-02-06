import React from 'react';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import Pizza from './Pizza';
import pizzas from '../data/data';
import style from './Pizza.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// import { GiConsoleController } from 'react-icons/gi';

function PizzaList({ cart, setCart }) {
  const unique_id = uuid();
  const [pizzaSize, setPizzaSize] = useState('medium');
  const [show, setShow] = useState(false); /* for modal window */
  const handleClose = () => setShow(false); /* for modal window */
  const handleShow = () => setShow(true); /* for modal window */

  const handleAddtoCart = (img, title, price, size) => {
    if (cart.length > 0) {
      let exist = false;
      setCart(
        cart.map((el) => {
          if (el.title === title && el.price === price) {
            exist = true;
            return { ...el, count: el.count + 1 };
          } else {
            return el;
          }
        })
      );
      if (!exist) {
        setCart([
          ...cart,
          {
            id: unique_id,
            img: img,
            title: title,
            price: price,
            count: 1,
            size: size,
          },
        ]);
      }
    } else {
      setCart([
        {
          id: unique_id,
          img: img,
          title: title,
          price: price,
          count: 1,
          size: size,
        },
      ]);
    }
    console.log(cart);
  };

  const [pizza, setPizza] = useState({
    img: '',
    title: '',
    ingredients: '',
    price: { small: 0, medium: 0, large: 0 },
  });

  const handlePizzaModal = (selectedPizza) => setPizza(selectedPizza);

  return (
    <>
      <div className={style.pizzaList}>
        {pizzas.map((pizza, index) => (
          <Pizza
            key={index}
            pizza={pizza}
            handlePizzaModal={handlePizzaModal}
            handleShow={handleShow}
          />
        ))}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className={style.modalStyle}>
          <div className={style.orderItem}>
            <img className={style.orderItemProduct} src={pizza.img} alt="" />
            <div className={style.orderItemText}>
              <h4> {pizza.title}</h4>
              <p>{pizza.ingredients}</p>
            </div>
          </div>
          <div className={style.orderItem_options}>
            <div className={style.picca_size}>
              <label htmlFor="1" className={style.btnActive}>
                small
              </label>
              <input
                type="radio"
                id="1"
                value="small"
                name="pizza-size"
                onChange={(event) => setPizzaSize(event.target.value)}
              />
              <label htmlFor="2" className={style.btnActive}>
                medium
              </label>
              <input
                type="radio"
                id="2"
                value="medium"
                name="pizza-size"
                onChange={(event) => setPizzaSize(event.target.value)}
              />
              <label htmlFor="3" className={style.btnActive}>
                large
              </label>
              <input
                type="radio"
                id="3"
                value="large"
                name="pizza-size"
                onChange={(event) => setPizzaSize(event.target.value)}
              />
            </div>
            <div className={style.doughThickness}>
              <label className={style.dough} tabIndex="1">
                thin
              </label>
              <label className={style.dough} tabIndex="1">
                thick
              </label>
            </div>
            <div />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            variant="primary"
            onClick={() => {
              handleAddtoCart(
                pizza.img,
                pizza.title,
                pizza.price[pizzaSize],
                pizzaSize
              );
              handleClose();
            }}
          >
            Understood
            <span>$ {pizza.price[pizzaSize]}</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PizzaList;
