import { useState } from 'react'
import styles from './App.module.css'
import { Logo } from './components/icons/logo'
import { Search } from './components/search/search'
import { Location } from './components/location/location'
import { ResidentSection } from './components/resident-section/resident-section'

function App () {
  const [residentData, setResidentData] = useState({
    data: null,
    loading: false,
    error: null
  })

  return (
    <main className={styles.main}>
      <div className={styles.welcomeSection}>

        <header className={styles.header}>

          <div className={styles.logo}>
            <Logo height='100%' width='100%' />
          </div>

          <Search setResidentData={setResidentData} />

        </header>
        <Location data={residentData.data} />

      </div>
      <ResidentSection data={residentData} />
    </main>
  )
}

export default App
