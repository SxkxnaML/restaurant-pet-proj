import styles from './ReserveTableSection.module.css'

export default function ReserveTableSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imagesContainer}>
          <div className={styles.mainCircle}>
            <img
              src="img/food-table.jpg"
              alt="People enjoying food at a table"
              className={styles.mainImage}
            />
          </div>
          <div className={styles.topSmallCircle}>
            <img
              src="img/small-food-table.jpg"
              alt="small-table-in-restaraunt"
              className={styles.smallImage}
            />
          </div>
          <div className={styles.bottomSmallCircle}>
            <img
              src="img/restaraunt-table.jpg"
              alt="table-in-restaraunt"
              className={styles.smallImage}
            />
          </div>
        </div>

        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Let's reserve <span className={styles.accent}>a table</span>
          </h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>
          <button className={styles.reservationBtn}>Reservation</button>
        </div>
      </div>
    </section>
  )
}
