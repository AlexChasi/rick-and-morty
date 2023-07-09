import styles from './pagination.module.css'
import { useEffect, useState } from 'react'

export function Pagination ({ fullData, setData }) {
  const [currentPage, setCurrentPage] = useState(1)
  // La página se inicializa siempre en uno

  useEffect(() => {
    // 1 * 10 = 10 <-- Último elemento de la primer página
    // (1 * 10) - 10 = 0  <-- Primer elemento de la primer página
    const indexOfLastElement = currentPage * 10
    const indexOfFirstElement = indexOfLastElement - 10

    // .slice Secciona el array de residentes y devuelve los elementos que estan entre los índices
    setData(fullData.slice(indexOfFirstElement, indexOfLastElement))
  }, [currentPage])

  const pagesToMap = Array.from({ length: Math.ceil(fullData.length / 10) }, (_, index) => index + 1)

  const changePage = (page) => {
    if (page >= 1 && page <= Math.ceil(fullData.length / 10)) {
      setCurrentPage(page)
    }
  }

  return (
    <div className={styles.container}>

      {
        pagesToMap.map(page => (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`${page === currentPage ? styles.active : ''} ${styles.button}`}
          >
            {page}
          </button>
        ))
      }

    </div>
  )
};
