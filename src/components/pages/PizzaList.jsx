import React from 'react';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import Pizza from './Pizza';
import pizzas from '../data/data';
import style from './Pizza.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function PizzaList({
  cart,
  setCart,
  cartCost,
  setCartCost,
  cartCount,
  setCartCount,
}) {
  const unique_id = uuid(); // funtion for unique id

  /*____________________pizza variables___________________________*/
  const [pizza, setPizza] = useState({
    img: '',
    title: '',
    ingredients: '',
    dough: '',
    price: { small: 0, medium: 0, large: 0 },
  });
  const [pizzaSize, setPizzaSize] = useState('medium');
  const [pizzaDough, setPizzaDough] = useState(false);
  const [focusPizzaBtn, setFocusPizzaBtn] = useState(false);
  const [focusPizzaBtnDough, setFocusPizzaBtnDough] = useState(false);

  /*____________________for modal window___________________________*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /*___funtion for change style buttons, options pizza siza and dough__*/
  const handleFocusBtnPizza = (className) => {
    if (focusPizzaBtn === className) {
      return `${style.focusBtn}`;
    } else if (focusPizzaBtnDough === className) {
      return `${style.focusBtn}`;
    }
  };
  /*function add pizza to cart or increasing units in the cart if such a product is already available*/
  const handleAddtoCart = (img, title, price, size, dough) => {
    if (cart.length > 0) {
      let exist = false;
      setCart(
        cart.map((el) => {
          if (el.title === title && el.price === price && el.dough === dough) {
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
            dough: dough,
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
          dough: dough,
        },
      ]);
    }
  };

  /*____________________function for open window order__________________________*/
  const handlePizzaModal = (selectedPizza) => setPizza(selectedPizza);

  return (
    <>
      {/*==============================================Pizza list================================*/}
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

      {/*=================================Modal Window for add order pizza to cart==================*/}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          className="border-0"
          onClick={() => {
            setPizzaDough(false);
            setPizzaSize(false);
            setFocusPizzaBtnDough(false);
            setFocusPizzaBtn(false);
            handleClose();
          }}
        >
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
              <label
                htmlFor="1"
                className={handleFocusBtnPizza('small')}
                tabIndex="0"
                onClick={(event) => setFocusPizzaBtn(event.target.textContent)}
              >
                small
              </label>
              <input
                type="radio"
                id="1"
                value="small"
                name="pizza-size"
                onChange={(event) => setPizzaSize(event.target.value)}
              />
              <label
                htmlFor="2"
                className={handleFocusBtnPizza('medium')}
                tabIndex="0"
                onClick={(event) => setFocusPizzaBtn(event.target.textContent)}
              >
                medium
              </label>
              <input
                type="radio"
                id="2"
                value="medium"
                name="pizza-size"
                onChange={(event) => setPizzaSize(event.target.value)}
              />
              <label
                htmlFor="3"
                className={handleFocusBtnPizza('large')}
                tabIndex="0"
                onClick={(event) => setFocusPizzaBtn(event.target.textContent)}
              >
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
              <label
                className={handleFocusBtnPizza('thin')}
                tabIndex="1"
                htmlFor="thin"
                onClick={(event) =>
                  setFocusPizzaBtnDough(event.target.textContent)
                }
              >
                thin
              </label>
              <input
                type="radio"
                id="thin"
                value="thin"
                name="pizza-dough"
                onChange={(event) => setPizzaDough(event.target.value)}
              />
              <label
                className={handleFocusBtnPizza('thick')}
                tabIndex="1"
                htmlFor="thick"
                onClick={(event) =>
                  setFocusPizzaBtnDough(event.target.textContent)
                }
              >
                thick
              </label>
              <input
                type="radio"
                id="thick"
                value="thick"
                name="pizza-dough"
                onChange={(event) => setPizzaDough(event.target.value)}
              />
            </div>
            <div />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          {pizzaDough && pizzaSize ? (
            <Button
              className={style.btnOrderToCart}
              onClick={() => {
                handleAddtoCart(
                  pizza.img,
                  pizza.title,
                  pizza.price[pizzaSize],
                  pizzaSize,
                  pizzaDough
                );
                setPizzaDough(false);
                setPizzaSize(false);
                setCartCost(cartCost + pizza.price[pizzaSize]);
                setFocusPizzaBtn(false);
                setFocusPizzaBtnDough(false);
                setCartCount(++cartCount);
                handleClose();
              }}
            >
              <p>
                to Cart&nbsp;
                <span className={style.btnAddToCart}>{pizzaSize} </span> pizza
                and&nbsp;
                <span className={style.btnAddToCart}>{pizzaDough}</span>
                .&nbsp; Cost:&nbsp;
                <span className={style.btnAddToCart}>
                  ${pizza.price[pizzaSize]}
                </span>
              </p>
            </Button>
          ) : (
            <Button variant="secondary" disabled>
              Please select size and dough type
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PizzaList;
