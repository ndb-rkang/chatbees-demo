import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="https://www.chatbees.ai/logo_favicon.svg" alt="Chatbees Logo" className={styles.logo} />
      </footer>
    </>
  )
}
