import {
  header,
  contenedor,
  barra,
  navbar,
  footer,
} from '../styles/Footer.module.css';

const Footer = () => {
  // Get Full Year
  const getCurrentYear = new Date().getFullYear();

  return (
    <footer className={footer}>
      <div className={contenedor}>
        <p>© {getCurrentYear} GuitarLa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
