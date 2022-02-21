import Link from 'next/link';
import Layout from '../components/Layout';
import Listado from '../components/Listado';
import Curso from '../components/Curso';
import ListadoBlog from '../components/ListadoBlog';
import { contenedor, contenido, section } from '../styles/Home.module.css';

export default function Home({ guitarras, curso, entradas }) {
  return (
    <Layout titlePage="Inicio" guitarra={guitarras[0]}>
      <main className={contenedor}>
        <h1 className="">Nuestra Colección</h1>
        <div className={contenido}>
          <Listado guitarras={guitarras} />
        </div>
      </main>
      <Curso curso={curso} />
      <section className={section}>
        <ListadoBlog entradas={entradas} />
      </section>
    </Layout>
  );
}

// !Consuta a Api
export async function getServerSideProps() {
  // La consulta puede ser ordenada por precio u otro atributos creados
  const urlGuitarras = `${process.env.API_URL}/guitarras`;
  const urlCursos = `${process.env.API_URL}/cursosdeguitarra`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  // El await como bloquea la siguinte linea, este debe terminar para de ejecutarse para recion continuar con la siguiente Linea
  // Con Promise.all() no espero a que una promsea se ejecute primero sino las dos a la vez
  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog),
  ]);

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json(),
  ]);

  return {
    props: {
      guitarras,
      curso,
      entradas,
    },
  };
}
