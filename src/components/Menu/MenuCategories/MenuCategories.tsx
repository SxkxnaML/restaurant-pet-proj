import type { Dispatch, SetStateAction } from 'react'
import styles from './MenuCategories.module.css'
import type { ItemCategory } from '../Menu'

interface MenuCategories {
  title: string
  name: ItemCategory | 'all'
}

const MENU_CATEGORIES: MenuCategories[] = [
  { title: 'All category', name: 'all' },
  { title: 'Dinner', name: 'dinner' },
  { title: 'Lunch', name: 'lunch' },
  { title: 'Dessert', name: 'dessert' },
  { title: 'Drink', name: 'drink' },
]

interface MenuCategoriesProps {
  activeCategory: string
  setActiveCategory: Dispatch<SetStateAction<ItemCategory>>
}

export default function MenuCategories({
  activeCategory,
  setActiveCategory,
}: MenuCategoriesProps) {
  return (
    <div className={styles.category}>
      {MENU_CATEGORIES.map((obj) => (
        <button
          key={obj.name}
          className={`${styles.categoryBtn} ${activeCategory === obj.name ? styles.active : ''}`}
          onClick={() => setActiveCategory(obj.name)}
        >
          {obj.title}
        </button>
      ))}
    </div>
  )
}
