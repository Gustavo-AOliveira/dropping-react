import styles from './styles.module.css';

function ProductManagement() {
  return (
    <div className={ styles.menuContainer }>
      <div className={ styles.header }>
        <span>Product management</span>
        <a href="/cadProduto">
            <button id="new">Add</button>
        </a>
        
      </div>

      <div className={ styles.divTable }>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Brand</th>
              <th>Name</th>
              <th>Size</th>
              <th>Color</th>
              <th>Image</th>
              <th>Gender</th>
              <th>Update</th>
              <th>Delete</th>
              
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
              <th><a className={ styles.acao } href="/atualizaProduto">Update</a></th>
              <th><a className={ styles.acao } href="#" >Delete</a></th>

              
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>2</td>
              <td>Adidas</td>
              <td>Adidas</td>
              <td>39</td>
              <td>Pink</td>
              <td>Pendente</td>
              <td>Feminino</td>
              <th><a className={ styles.acao } href="/atualizaProduto">Update</a></th>
              <th><a className={ styles.acao } href="#" >Delete</a></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { ProductManagement };
