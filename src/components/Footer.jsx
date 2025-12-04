import styles from './Footer.module.css';

const Footer = () => {
  
  const anioActual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Seccion de enlaces */}
      <ul className={styles.footerNav}>
        <li>
          <a href="https://github.com/Nicote93/Reacts-EntregaFinal2025" className={styles.footerLink}>Acerca de Nosotros</a>
        </li>
        <li>
          <a href="https://ih1.redbubble.net/image.3165548305.9171/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" className={styles.footerLink}>Política de Privacidad</a>
        </li>
      </ul>
      {/* Seccion de Copyright */}
      <p className={styles.copyright}>
        © {anioActual} Skytecnology Store. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;