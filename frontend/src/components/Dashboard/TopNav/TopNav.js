import styles from './TopNav.module.css'

export default function TopNav() {
  return (
    <main className={styles.navContainer}>
      <div className="d-flex justify-content-end">
        <i className="fas fa-user" ></i>
        <i className="fas fa-bell"></i>
      </div>
    </main>
  )
}
