import styles from './MenuList.module.css'
import type { MenuItem } from '../Menu'
import { MenuCard } from './MenuCard/MenuCard'

interface MenuListProps {
  displayedItems: MenuItem[]
  isLoading: boolean
}

export default function MenuList({ displayedItems, isLoading }: MenuListProps) {
  if (isLoading)
    return <div className={styles.menuLoading}>Идет загрузка...</div>

  return (
    <div className={styles.menuGrid}>
      {displayedItems.map((obj) => (
        <MenuCard key={obj.id} {...obj} />
      ))}
    </div>
  )
}
