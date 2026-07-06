import Menu from '@/components/Menu/Menu'
import styles from './PopularMenuSection.module.css'

export default function PopularMenuSection() {
  return (
    <>
      <h2 className={styles.title}> Our popular menu </h2> <Menu />
    </>
  )
}
