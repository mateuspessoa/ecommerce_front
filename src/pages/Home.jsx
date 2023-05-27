import NavBar from "../components/NavBar"
import styles from '../styles/Home.module.css'

import camiseta1 from '../assets/camiseta1.png'
import camiseta2 from '../assets/camiseta2.png'
import camiseta3 from '../assets/camiseta3.png'
//import camiseta4 from '../assets/camiseta4.png'

import caneca1 from '../assets/caneca1.png'
import caneca2 from '../assets/caneca2.png'
import { Link } from "react-router-dom"
//import caneca3 from '../assets/caneca3.png'
//import caneca4 from '../assets/caneca4.png'

function Home() {

    const produto = [
        {id: 1, name: "Caneca de cerâmica rústica", price: 40, image: caneca1},
        {id: 2, name: "Camiseta not today", price: 78, image: camiseta1},
        {id: 3, name: "Caneca Black Ring", price: 32, image: caneca2},
        {id: 4, name: "Camiseta Broken Saints", price: 58, image: camiseta2},
        {id: 5, name: "Camiseta Outcast", price: 89, image: camiseta3},
    ]

    return (
        <>
            <NavBar />
            <div className={styles.container_categorias}>
                <div className={styles.content_categorias}>
                    <ul>
                        <li>TODOS OS PRODUTOS</li>
                        <li>CAMISETAS</li>
                        <li>CANECAS</li>
                    </ul>
                </div>
                <div className={styles.select}>
                    <select>
                        <option>Organizar por</option>
                    </select>
                </div>
            </div>

            <div className={styles.container_produtos}>

                {produto.map((item) => (
                    <>
                        
                        <div className={styles.card_produto}>
                            <Link to={`/detalhes/${item.id}`}>
                                <div className={styles.container_imagem}>
                                    <img src={item.image} alt="caneca" />
                                </div>
                                    
                                <div className={styles.container_nome_produto}>
                                    <div className={styles.nome}>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                                <div className={styles.container_preco_produto}>
                                    <div className={styles.preco}>
                                        <p>{(item.price).toLocaleString("pt-br", { style: "currency", currency: "BRL", })}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        
                    </>
                ))}
                
            </div>
        </>
    )
  }
  
  export default Home