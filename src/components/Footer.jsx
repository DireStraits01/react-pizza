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
        <div className={style.footerBody}>
          <div className={style.row}>
            <div className={style.col_row_1}>
              <div className={style.header_col_1}>
                <div className={style.title}>
                  <h1>T </h1>
                  <h1>Devs</h1>
                </div>

                <p className={style.card_text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur consectetur quod dolor possimus natus. Cum error odit,
                  eveniet quas velit perspiciatis fugiat eius numquam.
                  Architecto veritatis a velit ducimus maxime.
                </p>
              </div>
            </div>
            <div className={style.col_row_2}>
              <div className={style.col}>
                <h5>Services</h5>
                <ul>
                  <li>IT Consulting -</li>
                  <li>Development</li>
                  <li>Cloud</li>
                  <li>DevOps & Support</li>
                </ul>
              </div>

              <div className={style.col}>
                <h5>Industries</h5>
                <ul>
                  <li>Finance</li>
                  <li>Public Sector</li>
                  <li>Smart Office</li>
                  <li>Retail</li>
                </ul>
              </div>

              <div className={style.col}>
                <h5>Company</h5>
                <ul>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact</li>
                  <li>Join Us</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Footer;
