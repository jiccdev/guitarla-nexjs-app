import Layout from '../components/Layout';
import ListadoBlog from '../components/ListadoBlog';

const Blog = ({ inputs }) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`;

  return (
    <Layout titlePage="Blog">
      <main>
        <ListadoBlog inputs={inputs} />
      </main>
    </Layout>
  );
};
// *** Nota
// Usar serverSideProps cuando el contendio tenga que cambiar muy seguidp
// Usar staticProps cuando el contenido no cambia muy frecuente
// El export tambien se hace dsiponible en el mismo componentes
// using serverSideProps
// !Esta parte corre en el servidor
export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const res = await fetch(url);
  const inputs = await res.json();

  return {
    props: {
      inputs,
    },
  };
}

export default Blog;
