import style from './Navbar.module.css';

function Authentication() {
  return (
    <>
      <form action="#">
        <div className={style.authenForms}>
          <div>
            <label htmlFor="email"></label>
            <input type="text" id="email" name="email" placeholder="email" />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="password"
            />
          </div>
        </div>

        <div className={style.authenButtons}>
          <button>sign in</button>
          <button>login</button>
        </div>
      </form>
    </>
  );
}

export default Authentication;
