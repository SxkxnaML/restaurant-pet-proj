import { useEffect, useState } from 'react'
import axios from 'axios'
import { CiStar } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import styles from './PopularMenuSection.module.css'
import Pagination from '@/components/Pagination/Pagination'

type MenuItem = {
  id: number
  name: string
  category: string
  image: string
}

const ITEMS_PER_PAGE = 5

const MENU_CATEGORIES = [
  { name: 'All category' },
  { name: 'Dinner' },
  { name: 'Lunch' },
  { name: 'Dessert' },
  { name: 'Drink' },
]

export default function PopularMenuSection() {
  const [loading, setLoading] = useState(true)
  const [popularMenuCollections, setPopularMenuCollections] = useState<
    MenuItem[]
  >([])

  const [ratings, setRatings] = useState<Record<number, number>>({})
  const [page, setPage] = useState(1)
  const [hoverRatings, setHoverRatings] = useState<Record<number, number>>({})
  const [activeCategory, setActiveCategory] = useState('All category')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `https://6a33d0a38248ee962fa476c9.mockapi.io/ItalianPopularFood?`,
        )
        setPopularMenuCollections(response.data)
      } catch (err) {
        console.warn(err)
        alert('Не удалось получить данные')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    setPage(1)
  }, [activeCategory])

  const filteredMenuCollections = popularMenuCollections.filter((item) => {
    if (activeCategory === 'All category') return true
    return item.category.includes(activeCategory.toLowerCase())
  })

  const displayedItems = filteredMenuCollections.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  )

  const totalPages = Math.ceil(filteredMenuCollections.length / ITEMS_PER_PAGE)

  const handleRate = (id: number, rating: number) => {
    setRatings({ ...ratings, [id]: rating })
  }

  const handleMouseEnter = (id: number, rating: number) => {
    setHoverRatings((prev) => ({ ...prev, [id]: rating }))
  }

  const handleMouseLeave = (id: number) => {
    setHoverRatings((prev) => ({ ...prev, [id]: 0 }))
  }

  return (
    <>
      <h2 className={styles.title}> Our popular menu </h2>
      <div className={styles.category}>
        {MENU_CATEGORIES.map((obj) => (
          <button
            key={obj.name}
            className={`${styles.categoryBtn} ${activeCategory === obj.name ? styles.active : ''}`}
            onClick={() => setActiveCategory(obj.name)}
          >
            {obj.name}
          </button>
        ))}
      </div>
      {loading ? (
        'Идет загрузка...'
      ) : (
        <div className={styles.menuGrid}>
          {displayedItems.map((obj) => (
            <div key={obj.id} className={styles.menuCard}>
              <img src={obj.image} alt="popular-food-image" />
              <div className={styles.menuCardContent}>
                <h3>{obj.name}</h3>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map((star) => {
                    const currentRating =
                      hoverRatings[obj.id] || ratings[obj.id] || 0
                    const isFilled = star <= currentRating

                    return isFilled ? (
                      <FaStar
                        key={star}
                        className={styles.starIcon}
                        onClick={() => handleRate(obj.id, star)}
                        onMouseEnter={() => handleMouseEnter(obj.id, star)}
                        onMouseLeave={() => handleMouseLeave(obj.id)}
                      />
                    ) : (
                      <CiStar
                        key={star}
                        className={styles.starIcon}
                        onClick={() => handleRate(obj.id, star)}
                        onMouseEnter={() => handleMouseEnter(obj.id, star)}
                        onMouseLeave={() => handleMouseLeave(obj.id)}
                      />
                    )
                  })}
                </div>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas consequat mi eget auctor aliquam, diam.
                </p>
                <div className={styles.priceOrderRow}>
                  <div className={styles.price}>$12.05</div>
                  <button className={styles.orderBtn}>Order now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </>
  )
}
