import styles from '../styles/NavBar.module.css'
import { FiShoppingBag } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';

function NavBar() {

    return (
      <div className={styles.container}>
        <div className={styles.logo}>
            <h1>capputeeno</h1>
        </div>
        <div className={styles.input_icon}>
            <div className={styles.input}>
                <input type="text" placeholder='Procurando por algo específico?' />
                <div className={styles.icon_input}>
                    <FiSearch size={20} color='#737380' />
                </div>
            </div>
            <div className={styles.icone_carrinho}>
                <div className={styles.quant_carrinho}>
                    <p>2</p>
                </div>
                <FiShoppingBag size={20} color='#737380' />
            </div>
        </div>
      </div>
    )
  }
  
  export default NavBar