import styles from './GreatestChefSection.module.css'

export default function GreatestChefSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our greatest chef</h2>
      <div className={styles.chefList}>
        <div className={styles.chefCard}>
          <img
            className={styles.chefOne}
            src="img/chef1.png"
            alt="Betran Komar, Head chef"
          />
          <p className={styles.chefName}>Betran Komar</p>
          <span className={styles.chefRole}>Head chef</span>
        </div>
        <div className={styles.chefCard}>
          <img className={styles.chefTwo} src="img/chef2.png" alt="chef-two" />
          <p className={styles.chefName}>Ferry Sauwi</p>
          <span className={styles.chefRole}>Chef</span>
        </div>
        <div className={styles.chefCard}>
          <img
            className={styles.chefThree}
            src="img/chef3.png"
            alt="chef-three"
          />
          <p className={styles.chefName}>Iswan Dracho</p>
          <span className={styles.chefRole}>Chef</span>
        </div>
      </div>
      <button className={styles.viewAllButton} type="button">
        View all
      </button>
    </section>
  )
}
