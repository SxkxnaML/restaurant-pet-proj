import styles from './Footer.module.css'
import { MdCopyright } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.brandColumn}>
          <div className={styles.logoContainer}>
            <div className={styles.logoCircle}>D</div>
            <h1 className={styles.brandName}>
              Delizi<span className={styles.accent}>oso</span>
            </h1>
          </div>

          <p className={styles.description}>
            Viverra gravida morbi egestas facilisis tortor netus non duis
            tempor.
          </p>

          <div className={styles.socials}>
            <a className={styles.socialIcon} href="https://x.com/">
              <img src="img/twitter.png" alt="twitter-logo" />
            </a>
            <a className={styles.socialIcon} href="https://www.instagram.com/">
              <img src="img/instagram.png" alt="instagram-logo" />
            </a>
            <a className={styles.socialIcon} href="https://www.facebook.com/">
              <img src="img/facebook.png" alt="facebook-logo" />
            </a>
          </div>
        </div>

        <div className={styles.linkColumn}>
          <p className={styles.columnTitle}>Page</p>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Order online</a>
            </li>
            <li>
              <a href="#">Catering</a>
            </li>
            <li>
              <a href="#">Reservation</a>
            </li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <p className={styles.columnTitle}>Information</p>
          <ul className={styles.linkList}>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Event</a>
            </li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <p className={styles.columnTitle}>Get in touch</p>
          <ul className={styles.contactList}>
            <li className={styles.address}>
              3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat
            </li>
            <li>
              <a href="mailto:delizioso@gmail.com">delizioso@gmail.com</a>
            </li>
            <li>
              <a href="tel:+123 4567 8901">+123 4567 8901</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <p className={styles.copyright}>
          Copyright <MdCopyright /> 2022 Delizioso
        </p>
      </div>
    </footer>
  )
}
