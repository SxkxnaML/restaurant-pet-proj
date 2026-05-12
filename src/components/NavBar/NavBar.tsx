import { HiOutlineShoppingCart } from 'react-icons/hi'
import styles from './NavBar.module.css'


export default function NavBar() {
  return (
    <nav className={styles.nav}>
      {/* logo */}
      <div className={styles.logoContainer}>
        <div className={styles.logoCircle}>D</div>
        <h1 className={styles.brandName}>Delizioso</h1>
      </div>
      {/* main nav */}
      <ul className={styles.mainNav}>
        <li className={styles.navLink}>Home</li>
        <li className={styles.navLink}>Menu</li>
        <li className={styles.navLink}>About us</li>
        <li className={styles.navLink}>Order online</li>
        <li className={styles.navLink}>Reservation</li>
        <li className={styles.navLink}>Contact us</li>
      </ul>
      {/* shopping cart */}
      <div className={styles.rightSection}>
        <div className={styles.cartContainer}>
          <HiOutlineShoppingCart className={styles.cartIcon} />
        </div>
        {/*  login btn */}
        <button className={styles.loginBtn}>Log in</button>
      </div>
    </nav>
  )
}
