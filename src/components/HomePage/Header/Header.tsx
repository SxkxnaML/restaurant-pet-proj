import NavBar from './NavBar/NavBar'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <NavBar />
      <div className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.restaurantBadge}> Restaurant </p>
          <h1 className={styles.title}> Italian Cuisine </h1>
          <p className={styles.description}>
            Lorem ipsumf dolor sit amet, consectetur adipiscing elit. Sodales
            senectus dictum arcu sit tristique donec eget.
          </p>
          <div className={styles.buttons}>
            <button className={styles.orderBtn}> Order now </button>
            <button className={styles.reservationBtn}> Reservation </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.pastaImg}
            src="./img/pasta.png"
            alt="pasta.png"
          />
          <img className={styles.salad} src="./img/salad.png" alt="salad.png" />
          <img
            className={styles.salad2}
            src="./img/salad.png"
            alt="salad.png"
          />
        </div>
      </div>
    </header>
  )
}
