import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import styles from './Pagination.module.css'
import type { Dispatch, SetStateAction } from 'react'

interface PaginationProps {
  setPage: Dispatch<SetStateAction<number>>
  page: number
  totalPages: number
}

export default function Pagination({
  setPage,
  page,
  totalPages,
}: PaginationProps) {
  const handlePrev = () => {
    setPage((prev) => Math.max(1, prev - 1))
  }

  const handleNext = () => {
    setPage((prev) => Math.min(totalPages, prev + 1))
  }

  return (
    <ul className={styles.pagination}>
      <li className={styles.arrow} onClick={handlePrev}>
        <MdArrowBackIosNew />
      </li>
      {[...Array(3)].map((_, i) => (
        <li className={styles.number} onClick={() => setPage(i + 1)}>
          {i + 1}
        </li>
      ))}
      <li className={styles.dots}>...</li>
      <li className={styles.arrow} onClick={handleNext}>
        <MdArrowForwardIos />
      </li>
    </ul>
  )
}
