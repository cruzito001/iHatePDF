import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © 2025 iHatePDF. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}