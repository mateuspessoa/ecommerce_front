import styles from '../styles/Detalhes.module.css'
import NavBar from "../components/NavBar"
import { FiShoppingBag } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';

import camiseta2 from '../assets/camiseta2.png'
import { Link } from 'react-router-dom';

const Detalhes = () => {

    const produto = {
        id: 2, name: "Camiseta not today", price: 78, image: camiseta2
    }

    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.esquerda}>
                    <div className={styles.voltar}>
                        <Link to="/">
                            <BiArrowBack size={20} color='#617480' />
                            <p>Voltar</p>
                        </Link>
                    </div>
                    <img src={produto.image} alt="camiseta" />
                </div>
                <div className={styles.direita}>
                    <div className={styles.nome_categoria}>
                        <p>Camiseta</p>
                    </div>
                    <div className={styles.titulo}>
                        <h1>Camiseta Broken Saints</h1>
                    </div>
                    <div className={styles.price}>
                        <h2>R$ 58,00</h2>
                    </div>
                    <div className={styles.frete}>
                        <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$ 900,00.</p>
                    </div>
                    <div className={styles.container_desc_btn}>
                        <div className={styles.desc}>
                            <h2>DESCRIÇÃO</h2>
                            <p>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
                        </div>
                        <div className={styles.btn}>
                            <button>
                                <FiShoppingBag size={20} color='#F5F5FA' />
                                ADICIONAR AO CARRINHO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detalhes