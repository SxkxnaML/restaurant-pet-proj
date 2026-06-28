import styles from './MenuCard.module.css'
import type { MenuItem } from '../../Menu'
import { CiStar } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'

export function MenuCard(obj: MenuItem) {
  return (
    <div key={obj.id} className={styles.menuCard}>
      <img src={obj.image} alt="popular-food-image" />
      <div className={styles.menuCardContent}>
        <h3>{obj.name}</h3>
        <div className={styles.stars}>
          {Array.from({ length: obj.rating }, (_, i) => i + 1).map((star) => (
            <FaStar key={star} className={styles.starIcon} />
          ))}
          {Array.from({ length: 5 - obj.rating }, (_, i) => i + 1).map(
            (star) => (
              <CiStar key={star} className={styles.starIcon} />
            ),
          )}
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          consequat mi eget auctor aliquam, diam.
        </p>
        <div className={styles.priceOrderRow}>
          <div className={styles.price}>$12.05</div>
          <button className={styles.orderBtn}>Order now</button>
        </div>
      </div>
    </div>
  )
}
