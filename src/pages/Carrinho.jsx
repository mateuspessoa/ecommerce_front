import styles from '../styles/Carrinho.module.css'
import NavBar from "../components/NavBar"
import { BsFillTrash3Fill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import camiseta2 from '../assets/camiseta2.png'
import { Link } from 'react-router-dom';

function Carrinho() {

    return (
        <>
            <NavBar/>
            <div className={styles.container}>
                <div className={styles.produtos}>
                    <Link to="/">
                        <div className={styles.voltar}>
                            <BiArrowBack size={18} color='#617480' />
                            <p>Voltar</p>
                        </div>
                    </Link>
                    <div className={styles.iden_carrinho}>
                        <h1>SEU CARRINHO</h1>
                        <h3>Total (3 produtos) <span>R$ 160,00</span></h3>
                    </div>
                    <div className={styles.container_cards}>
                        <div className={styles.card}>
                            <img src={camiseta2} alt="camiseta" />
                            <div className={styles.textos}>
                                <div className={styles.titulo_remove}>
                                    <h3>Camiseta Broken Saints</h3>
                                    <div className={styles.excluir}>
                                        <BsFillTrash3Fill size={20} color='#DE3838' />
                                    </div>
                                </div>
                                <div className={styles.desc}>
                                    <p>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
                                </div>
                                <div className={styles.price_quant}>
                                    <select>
                                        <option>1</option>
                                    </select>
                                    <h4>R$ 40,00</h4>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <img src={camiseta2} alt="camiseta" />
                            <div className={styles.textos}>
                                <div className={styles.titulo_remove}>
                                    <h3>Camiseta Broken Saints</h3>
                                    <BsFillTrash3Fill size={20} color='#DE3838' />
                                </div>
                                <div className={styles.desc}>
                                    <p>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
                                </div>
                                <div className={styles.price_quant}>
                                    <select>
                                        <option>1</option>
                                    </select>
                                    <h4>R$ 40,00</h4>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className={styles.valores}>
                    <div className={styles.content}>
                        <div className={styles.titulo}>
                            <h1>RESUMO DO PEDIDO</h1>
                        </div>
                        <div className={styles.subtotal}>
                            <h3>Subtotal de produtos</h3>
                            <h3>R$ 161,00</h3>
                        </div>
                        <div className={styles.subtotal}>
                            <h3>Entrega</h3>
                            <h3>R$ 40,00</h3>
                        </div>
                        <div className={styles.total}>
                            <h3>Total</h3>
                            <h3>R$ 201,00</h3>
                        </div>
                        <div className={styles.btn_finalizar}>
                            <button>FINALIZAR A COMPRA</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Carrinho