
import { Link } from "react-router-dom";

import styles from './navbar.module.css'

const Navbar = ()=>{

    return(
        <div className={styles.container}>
        <Link to={'/'} className={styles.link}>Dashboard</Link>
        <Link to={'products'} className={styles.link}>Products</Link>
        <Link to={'/orders'} className={styles.link}>Orders</Link>
        </div>
    )
}

export default Navbar;