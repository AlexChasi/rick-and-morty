import { useState } from 'react'
import { ResidentCard } from '../resident-card/resident-card'
import { Spinner } from '../spinner/spinner'
import styles from './resident-section.module.css'
import { Pagination } from '../pagination/pagination'

export function ResidentSection ({ data }) {
  const [pageData, setPageData] = useState(null)

  console.log({ pageData })

  return <>
  <div className={styles.container}>
    <section className={styles.section}>
      {
        data.loading
          ? <Spinner />
          : data.error
            ? <span>Something went wrong :{'('}</span>
            : pageData &&
            <>
              {
                pageData.map(el => (
                  <div className={styles.cardContainer} key={el}>
                    <ResidentCard url={el} />
                  </div>
                ))
              }
            </>
      }
    </section>
    {
        data.data && <Pagination fullData={data.data.residents} setData={setPageData} />
    }
  </div>
  </>
}
