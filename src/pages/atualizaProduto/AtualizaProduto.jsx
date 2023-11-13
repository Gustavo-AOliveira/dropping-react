import React from 'react';
import styles from './styles.module.css';
import { Footer } from '../../components/footer';

function AtualizaProduto() {
    return (
        <div className={ styles.atualizaProdutoContainer }>
    
          <section className={ styles.s1 }>
            <div className={ styles.s1Content }>

                <h1 className={ styles.titulo }>Atualizar Sneaker</h1>

                <img className={ styles.s1Img } src="../assets/imgs/logo-dropping.svg" alt="" />
    
                <form action="" method="POST">

                <label className={ styles.inputImgEmail }>
                        <input type="text" id="Code" name="Code" placeholder="Code" required={true} />
                    </label>
                    <br /><br />
                    
                    <label className={ styles.inputImgEmail }>
                        <input type="text" id="username" name="username" placeholder="Brand" required={true} />
                    </label>
                    <br /><br />

                    <label className={ styles.inputImgEmail }>
                        <input type="text" id="name" name="name" placeholder="Name" required={true} />
                    </label>
                    <br /><br />
                    
                    <label className={ styles.inputImgEmail }>
                        <input type="text" id="size" name="size" placeholder="Size" required={true} />
                    </label>
                    <br /><br />
    
                    <label className={ styles.inputImgEmail }>
                        <input type="text" id="color" name="color" placeholder="Color" required={true} />
                    </label>
                    <br /><br />

                    <label className={ styles.inputImgEmail }>
                        <input type="text" id="gender" name="gender" placeholder="Gender" required={true} />
                    </label>
                    <br /><br />
                    
                    <label className={styles.inputFile} for="imagem">Selecione uma imagem:</label>
                     <input type="file" id="imagem" name="imagem" accept="image/*"></input>

                    <br /><br />
                    
                    <input className={ styles.customButton } type="submit" value="Update" />
                </form>
            </div>
          </section>
    
          <Footer />
        </div>
      );
    }

export { AtualizaProduto };