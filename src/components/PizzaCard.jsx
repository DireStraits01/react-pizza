import style from './PizzaCard.module.css';

function PizzaCard() {
  return (
    <>
      <div className="pizza-card">
        <img src="" alt="" />
        <h3>Margarita</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illo,
          dicta repellendus similique a dolorum unde, officiis numquam nam eos
          quisquam nulla autem esse
        </p>
      </div>
      <div className="pizza-card__btns">
        <span>$23</span>
        <button>detail</button>
      </div>
    </>
  );
}

export default PizzaCard;
