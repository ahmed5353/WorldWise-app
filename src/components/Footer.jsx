import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
        <p>Coded by Ahmed Nagy</p>
      </div>
    </footer>
  );
}

export default Footer;
