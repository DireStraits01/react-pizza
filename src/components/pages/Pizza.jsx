import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './Pizza.module.css';
import pizzaObjData from '../data/data';

function Pizza() {
  const [show, setShow] = useState(false); /* for modal window */
  const handleClose = () => setShow(false); /* for modal window */
  const handleShow = () => setShow(true); /* for modal window */

  const [pizzaInCart, setPizzaInCart] = useState({});

  const handlePizzaInCart = (selectedPizza) => setPizzaInCart(selectedPizza);
  return (
    <>
      <div className={style.row}>
        {pizzaObjData.map((pizza, index) => {
          return (
            <div className={style.pizzaCard} key={index}>
              <img src={pizza.img} alt="" onClick={handleShow} />
              <h3>{pizza.title}</h3>
              <p>{pizza.ingredients}</p>
              <div className={style.pizzaCard__footer}>
                <span className={style.pizzaCard__price}>${pizza.price}</span>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShow();

                    handlePizzaInCart(pizza);
                  }}
                >
                  show
                </Button>
              </div>
            </div>
          );
        })}
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
          <Modal.Title>{pizzaInCart.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={style.modalStyle}></Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Pizza;
