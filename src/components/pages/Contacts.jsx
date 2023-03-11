import style from './Contacts.module.css';
import { contacts } from '../data/data';

function Contacts() {
  return (
    <>
      <div className={style.container}>
        {contacts.map((contact, index) => (
          <div className={style.contacts}>
            <h4>{contact.title}</h4>
            <p>{contact.contact}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Contacts;
