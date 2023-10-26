import React from 'react';
import styles from './Login.module.css';

export function Login() {
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.header__list}>
          <li><a className={styles.list__item} href="../pages/index.html">Home</a></li>
          <li><a className={styles.list__item} href="../pages/index.html">Products</a></li>
          <li><a className={styles.list__item} href="../pages/cadastro.html">Promotions</a></li>
          <li><a className={styles.list__item} href="../pages/index.html">Contacts</a></li>
        </ul>
      </header>

      <section className={styles.s1}>
        <div className={styles.s1-content}>
          <img className={styles.s1-img} src="../assets/imgs/logo-dropping.svg" alt="" />

          <form action="../pages/menu.html">
            <label className={styles.input-img-usuario}>
              <input type="text" id="username" name="username" placeholder="Username" required />
            </label>
            <br /><br />

            <label className={styles.input-img-senha}>
              <input type="password" id="senha" name="senha" placeholder="Password" required />
            </label>
            <br /><br />

            <input className={styles.custom-button} type="submit" value="Login" />
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <a className={styles.list__titulo} href="#">Dropping</a>
          <a className={styles.list__item} href="#">Pricing</a>
          <a className={styles.list__item} href="#">Beta</a>
          <a className={styles.list__item} href="#">Newsletter</a>
          <a className={styles.list__item} href="#">Updates</a>
        </div>

        <div className={styles.footer__container}>
          <a className={styles.list__titulo} href="#">Product</a>
          <a className={styles.list__item} href="#">Business</a>
          <a className={styles.list__item} href="#">Designers</a>
          <a className={styles.list__item} href="#">Classrooms</a>
          <a className={styles.list__item} href="#">Newcomers</a>
        </div>
        <div className={styles.footer__container}>
          <a className={styles.list__titulo} href="#">Resources</a>
          <a className={styles.list__item} href="#">Collaborations</a>
          <a className={styles.list__item} href="#">Editorials</a>
          <a className={styles.list__item} href="#">Product</a>
          <a className={styles.list__item} href="#">Newsroom</a>
        </div>
        <div className={styles.footer__container}>
          <a className={styles.list__titulo} href="#">About</a>
          <a className={styles.list__item} href="#">Company</a>
          <a className={styles.list__item} href="#">Careers</a>
          <a className={styles.list__item} href="#">Legal</a>
          <a className={styles.list__item} href="#">Help</a>
        </div>
      </footer>
      <p className={styles.footer__direitos}>© 2023 Dropping Store. All rights reserved. </p>
      <div className={styles.footer__links}>
        <img className="imgs" src="../assets/imgs/facebook.png" alt="logo-facebook" />
        <img className="imgs" src="../assets/imgs/twitter.png" alt="logo-twitter" />
        <img className="imgs" src="../assets/imgs/instagram.png" alt="logo-instagram" />
      </div>
    </>
  );
}
