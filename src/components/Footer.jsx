import React from 'react';
import style from './Footer.module.css';

function Footer() {
  return (
    <>
      <div className={style.content}></div>
      <div className={style.footer}>
        <div className={style.orangeLine}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum
          </p>
        </div>
        <div className={style.footerBody}></div>
      </div>
    </>
  );
}

export default Footer;
