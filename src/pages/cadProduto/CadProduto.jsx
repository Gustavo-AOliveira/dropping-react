import React, { useState } from 'react';
import styles from './styles.module.css';
import { Footer } from '../../components/footer';
import axios from 'axios';

function CadProduto() {
    
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState('');
    const [gender, setGender] = useState('');

    async function salvarSneaker(){

        
        let body = {
            brand: brand,
            name: name,
            size: size,
            color: color,
            image: image,
            gender: gender
        }
        let resposta = await axios.post('http://localhost:3000/api/products', body);
        let id = resposta.data.id;

        alert('Produto cadastrado com sucesso. ID: ' + id )
    }

 
    return (
        <div className={ styles.cadProdutoContainer }>
    
          <section className={ styles.s1 }>
            <div className={ styles.s1Content }>

                <h1 className={ styles.titulo }>Cadastrar Sneaker</h1>

                <img className={ styles.s1Img } src="../assets/imgs/logo-dropping.svg" alt="" />
    
                <form action="" method="POST">


                    <label className={ styles.inputImgEmail }>
                        <input type="text" value={brand} onChange={e => setBrand(e.target.value)} id="username" name="username" placeholder="Brand" required={true} />
                    </label>
                    <br /><br />

                    <label className={ styles.inputImgEmail }>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} id="name" name="name" placeholder="Name" required={true} />
                    </label>
                    <br /><br />
                    
                    <label className={ styles.inputImgEmail }>
                        <input type="text" value={size} onChange={e => setSize(e.target.value)} id="size" name="size" placeholder="Size" required={true} />
                    </label>
                    <br /><br />
    
                    <label className={ styles.inputImgEmail }>
                        <input type="text" value={color} onChange={e => setColor(e.target.value)} id="color" name="color" placeholder="Color" required={true} />
                    </label>
                    <br /><br />

                    <label className={ styles.inputImgEmail }>
                        <input type="text" value={gender} onChange={e => setGender(e.target.value)} id="gender" name="gender" placeholder="Gender" required={true} />
                    </label>
                    <br /><br />
                    
                    <label className={styles.inputFile} for="imagem">Select a image:</label>
                     <input type="file" value={image} onChange={e => setImage(e.target.files[0])} id="imagem" name="imagem" accept="image/*"></input>

                    <br /><br />
                    
                    <input className={ styles.customButton } onClick={salvarSneaker} type="submit" value="Add" />
                </form>
            </div>
          </section>
    
          <Footer />
        </div>
      );
    }

    export { CadProduto }