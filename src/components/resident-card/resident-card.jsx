import { useEffect, useState } from 'react'
import styles from './resident-card.module.css'
import { Spinner } from '../spinner/spinner'

export function ResidentCard ({ url }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('')
        }
        return res.json()
      })
      .then(json => {
        setData(json)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [])

  return <article className={styles.card} data-center={loading || error}>

    {
      loading
        ? <Spinner style={{ margin: 'auto' }} />
        : error
          ? <span style={{ margin: 'auto' }}>Something went wrong :{'('}</span>
          : data &&
            <>
              <img src={data.image} className={styles.image} />
              <div className={styles.dataSection}>
                <h4>{data.name}</h4>
                <footer>
                  <span>Species</span>
                  <p>{data.species}</p>

                  <span>Origin</span>
                  <p>{data.origin.name}</p>

                  <span>Times appear</span>
                  <p>{data.episode.length}</p>

                </footer>
              </div>
            </>
    }

  </article>
}
