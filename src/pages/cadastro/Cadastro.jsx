import React from 'react';
import styles from './Cadastro.module.css';

function Cadastro() {
  return (
    <div>
      <header className={styles.header}>
        <ul className="header__list">
          <li><a className="list__item" href="../pages/index.html">Home</a></li>
          <li><a className="list__item" href="../pages/index.html">Products</a></li>
          <li><a className="list__item" href="../pages/index.html">Promotions</a></li>
          <li><a className="list__item" href="../pages/index.html">Contacts</a></li>
        </ul>
      </header>
      <section className={styles.s1}>
        <div className={styles.s1-content}>
        </div>
      </section>
    </div>
  );
}

export default Cadastro;
