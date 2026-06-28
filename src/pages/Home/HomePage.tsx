import styles from './HomePage.module.css'
import PopularMenuSection from './PopularMenuSection/PopularMenuSection'
import ReserveTableSection from './ReserveTableSection/ReserveTableSection'
import WelcomeSection from './WelcomeSection/WelcomeSection'

export default function HomePage() {
  return (
    <div className={styles.page}>
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
            alt="pasta-image"
          />
          <img
            className={styles.lettuce}
            src="./img/lettuce.png"
            alt="lettuce-image"
          />
          <img
            className={styles.lettuce2}
            src="./img/lettuce.png"
            alt="lettuce-image"
          />
        </div>
      </div>
      <WelcomeSection />
      <PopularMenuSection />
      <ReserveTableSection />
    </div>
  )
}
