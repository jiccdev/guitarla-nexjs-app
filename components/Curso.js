import Link from 'next/link';
import { section, contenido } from '../styles/Curso.module.css';

const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso;
  console.log(curso);
  return (
    <section className={section}>
      <div className={contenido}>
        <h2>{titulo}</h2>
        <p>{contenido}</p>
        <Link href="/">Mas Información</Link>
      </div>
      {/* <style jsx>{`
        section {
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.65),
              rgb(0 0 0 /0.7)
            ),
            url(${imagen.url});
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          padding: 5rem;
        }
      `}</style> */}
    </section>
  );
};

export default Curso;
