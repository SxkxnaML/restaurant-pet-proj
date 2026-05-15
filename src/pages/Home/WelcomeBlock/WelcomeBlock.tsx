import styles from './WelcomeBlock.module.css'

export default function WelcomeBlock() {
  return (
    <div className={styles.container}>
      <img
        className={styles.saladImage}
        src="./img/salad.png"
        alt="salad.png"
      />
      <div className={styles.content}>
        <h2 className={styles.title}>Welcome to <br /> delizioso</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec
          quam
        </p>
        <button className={styles.button}>See our menu</button>
      </div>
    </div>
  )
}
