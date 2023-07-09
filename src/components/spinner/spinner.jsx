import styles from './spinner.module.css'

export function Spinner ({ props }) {
  return <div className={styles.loader} {...props}></div>
}
