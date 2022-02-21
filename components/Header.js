import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import {
  header,
  contenedor,
  barra,
  navbar,
  modelo,
  desc,
  precio,
  guitarraImg,
} from '../styles/Header.module.css';

const Header = ({ guitarra }) => {
  const router = useRouter();
  return (
    <header className={header}>
      <div className={contenedor}>
        <div className={barra}>
          <Link href="/">
            <a>
              <Image
                priority="true"
                src="/img/logo.svg"
                alt="Logo GuitarLA"
                width={150}
                height={50}
              />
            </a>
          </Link>

          <nav className={navbar}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>
        {guitarra && (
          <div className={modelo}>
            <h2>Modelo {guitarra.nombre}</h2>
            <p className={desc}> {guitarra.descripcion}</p>
            <p className={precio}>$ {guitarra.precio}</p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname === '/' && (
        <img
          className={guitarraImg}
          src="/img/header_guitarra.png"
          alt="Imagen Header Guitarra"
        />
      )}
    </header>
  );
};

export default Header;
