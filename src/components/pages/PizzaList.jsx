import React from 'react';
import { useState } from 'react';
import Pizza from './Pizza';
import pizzas from '../data/data';
import style from './Pizza.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function PizzaList() {
  const [show, setShow] = useState(false); /* for modal window */
  const handleClose = () => setShow(false); /* for modal window */
  const handleShow = () => setShow(true); /* for modal window */

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
              <label className={style.btnActive} tabIndex="1">
                20sm
              </label>
              <label className={style.btnActive} tabIndex="1">
                28sm
              </label>
              <label className={style.btnActive} tabIndex="1">
                33sm
              </label>
            </div>
            <div className={style.doughThickness}>
              <label className={style.dough} tabIndex="1">
                thin
              </label>
              <label className={style.dough} tabIndex="2">
                thick
              </label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="primary">
            Understood
            <span>$ {pizza.price.medium}</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PizzaList;
