import Link from 'next/link';
import { page } from '../styles/NotFoundPage.module.css';

const NotFound = () => {
  return (
    <div className={page}>
      <p>Page not found - Error 404</p>
      <Link href="/">Ir a Inicio</Link>
    </div>
  );
};

export default NotFound;
