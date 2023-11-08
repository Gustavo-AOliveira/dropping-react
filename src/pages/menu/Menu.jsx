import React, { useState } from 'react';
import styles from './styles.module.css';

function ProductManagement() {
  return (
    <div className={ styles.menuContainer }>
      <div className={ styles.header }>
        <span>Product management</span>
        <button id="new">Add</button>
      </div>

      <div className={ styles.divTable }>
        <table>
          <thead>
            <tr>
              <th>Code</th>
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
            <tr>
              <td>1</td>
              <td>Nike</td>
              <td>Nike Air Max Plus</td>
              <td>30</td>
              <td>Red</td>
              <td>Pendente</td>
              <td>Masculino</td>
              <td><button>Update</button></td>
              <td><button>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { ProductManagement };
