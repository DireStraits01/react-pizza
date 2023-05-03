import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../auth';
import style from './Authentication.module.css';
import { useState } from 'react';
function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  };
  return (
    <>
      <form action="#" onSubmit={signIn}>
        <div className={style.authenForms}>
          <div>
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(password);
              }}
            />
          </div>
        </div>

        <div className={style.authenButtons}>
          <button type="submit">login</button>
          <div className={style.signAndPass}>
            <p>sign in</p>
            <p>forgot password</p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Authentication;
