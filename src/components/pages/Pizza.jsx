import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './Pizza.module.css';
import pizzaObjData from '../data/data';

function Pizza() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className={style.row}>
        {pizzaObjData.map((pizzas, index) => {
          return (
            <div className={style.pizzaCard} key={index}>
              <img src={pizzas.img} alt="" onClick={handleShow} />
              <h3>{pizzas.title}</h3>
              <p>{pizzas.ingredients}</p>
              <div className={style.pizzaCard__footer}>
                <span className={style.pizzaCard__price}>${pizzas.price}</span>
                <Button variant="primary" onClick={handleShow}>
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
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Pizza;
