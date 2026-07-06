import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import MenuCategories from './MenuCategories/MenuCategories'
import MenuList from './MenuList/MenuList'
import MenuPagination from './MenuPagination/MenuPagination'

export type ItemCategory = 'all' | 'lunch' | 'dinner' | 'dessert' | 'drink'

export interface MenuItem {
  id: number
  name: string
  category: ItemCategory
  image: string
  rating: number
}

const ITEMS_PER_PAGE = 5

export default function Menu() {
  const [isLoading, setIsLoading] = useState(true)
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [page, setPage] = useState(1)
  const [activeCategory, setActiveCategory] = useState<ItemCategory | 'all'>(
    'all',
  )

  const { displayedItems, totalPages } = useMemo(() => {
    const filteredMenuItems = menuItems.filter((item) => {
      if (activeCategory === 'all') return true
      return item.category.includes(activeCategory.toLowerCase())
    })

    const displayedItems = filteredMenuItems.slice(
      (page - 1) * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE,
    )

    const totalPages = Math.ceil(filteredMenuItems.length / ITEMS_PER_PAGE)

    return {
      displayedItems,
      totalPages,
    }
  }, [activeCategory, page, menuItems])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          `https://6a33d0a38248ee962fa476c9.mockapi.io/ItalianPopularFood`,
        )
        setMenuItems(response.data)
      } catch (err) {
        console.warn(err)
        alert('Не удалось получить данные')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    setPage(1)
  }, [activeCategory])

  return (
    <>
      <MenuCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <MenuList displayedItems={displayedItems} isLoading={isLoading} />
      <MenuPagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  )
}
