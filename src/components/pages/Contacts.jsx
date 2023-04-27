import style from './Contacts.module.css';
import { contacts } from '../data/data';

function Contacts() {
  return (
    <>
      <div className={style.container}>
        <ul>
          <li>
            {contacts.map((contact, index) => (
              <div className={style.contacts} key={index}>
                <h4>{contact.title}:</h4>
                <p>{contact.contact}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contacts;
