import React from 'react';
import styles from './styles.module.css';

function ProductManagement() {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.header}>
        <span>Product management</span>
        <button id="new">Add</button>
      </div>

      <div className={styles.divTable}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>Name</th>
              <th>Size</th>
              <th>Colour</th>
              <th>Image</th>
              <th>Gender</th>
              <th className="acao"><a className="acoes" href="#">Update</a></th>
              <th className="acao"><a className="acoes" href="#">Delete</a></th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { ProductManagement };
