import { useState } from 'react'
import styles from './search.module.css'
import { SearchIcon } from '../icons/search'

export function Search ({ setResidentData }) {
  const [value, setValue] = useState('')

  const [queryData, setQueryData] = useState({
    data: null,
    error: null
  })

  const handleChange = e => {
    const val = e.target.value
    setValue(val)

    if (val === '') {
      setQueryData({ loading: false, error: null, data: null })
      return
    }

    setQueryData(prev => ({ ...prev, loading: true, error: null }))

    fetch(`https://rickandmortyapi.com/api/location?name=${val}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('')
        }
        return res.json()
      })
      .then(json => {
        setQueryData(prev => ({ ...prev, data: json.results, error: null }))
      })
      .catch(() => {
        setQueryData(prev => ({ ...prev, error: 'Something went wrong :(' }))
      })
      .finally(() => setQueryData(prev => ({ ...prev, loading: false })))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('tests', value)
    if (value === '') return

    setQueryData({ loading: false, error: null, data: null })
    setResidentData(prev => ({ ...prev, loading: true, error: null }))

    fetch(`https://rickandmortyapi.com/api/location/${value}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('')
        }
        return res.json()
      })
      .then(json => {
        setResidentData(prev => ({ ...prev, data: json, error: null }))
      })
      .catch(() => {
        setResidentData(prev => ({ ...prev, error: 'Something went wrong :(' }))
      })
      .finally(() => setResidentData(prev => ({ ...prev, loading: false })))
  }

  const handleRecommendationsClick = (data) => {
    setResidentData(prev => ({ ...prev, data }))
    setQueryData({ loading: false, error: null, data: null })
  }

  return (
  <div className={styles.inputSection}>
    <div className={styles.inputContainer}>

      <form onSubmit={handleSubmit}>
        <input placeholder='Type a location id...' type='text' onChange={handleChange} />
        <button>
          <span>Search</span>
          <SearchIcon width={25} height={25} />
        </button>
      </form>

      {
        queryData.data &&
          <div className={styles.recommendations}>
            {
              queryData.data?.map(el => <button key={el.id} onClick={() => handleRecommendationsClick(el)}>{el.name}</button>)
            }
          </div>
      }

    </div>
  </div>
  )
}
