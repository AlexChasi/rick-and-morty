import styles from './location.module.css'

export function Location ({ data }) {
  if (!data) return

  return <div className={styles.container}>
    <div>
      <h6>Nombre</h6>
      <span>{data.name}</span>
    </div>
    <div>
      <h6>Tipo</h6>
      <span>{data.type}</span>
    </div>
    <div>
      <h6>Dimensión</h6>
      <span>{data.dimension}</span>
    </div>
    <div>
      <h6>Poblacion</h6>
      <span>{data.residents.length}</span>
    </div>
  </div>
}
