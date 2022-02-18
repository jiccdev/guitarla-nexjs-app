import Link from 'next/link';
import Image from 'next/image';
import { header, contenedor, barra, navbar } from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={header}>
      <div className={contenedor}>
        <div className={barra}>
          <Link href="/">
            <Image
              src="/img/logo.svg"
              alt="Logo GuitarLA"
              width={150}
              height={50}
            />
          </Link>

          <nav className={navbar}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
