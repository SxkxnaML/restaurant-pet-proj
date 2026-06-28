import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import styles from './MenuPagination.module.css'
import type { Dispatch, SetStateAction } from 'react'

interface MenuPaginationProps {
  setPage: Dispatch<SetStateAction<number>>
  page: number
  totalPages: number
}

export default function MenuPagination({
  setPage,
  page,
  totalPages,
}: MenuPaginationProps) {
  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1)
    }
  }

  const handleNext = () => {
    setPage((prev) => prev + 1)
    if (page === totalPages) {
      setPage(totalPages)
    }
  }

  return (
    <ul className={styles.pagination}>
      <li className={styles.arrow} onClick={handlePrev}>
        <MdArrowBackIosNew />
      </li>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <li key={page} className={styles.number} onClick={() => setPage(page)}>
          {page}
        </li>
      ))}

      <li className={styles.dots}>...</li>
      <li className={styles.arrow} onClick={handleNext}>
        <MdArrowForwardIos />
      </li>
    </ul>
  )
}
