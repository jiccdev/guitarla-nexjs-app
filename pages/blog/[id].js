import Image from 'next/image';
import Layout from '../../components/Layout';
import { formatDate } from '../../helpers';
import {
  contenedor,
  item,
  contentDesc,
} from '../../styles/ItemBlog.module.css';

const ItemBlog = ({ input }) => {
  const { titulo, contenido, imagen, published_at, date } = input;

  return (
    <Layout titlePage="Item Blog">
      <main className={contenedor}>
        <h2>Item Blog</h2>
        <article className={item}>
          <h2>{titulo}</h2>
          <Image
            src={imagen.url}
            layout="responsive"
            width={800}
            height={600}
            alt={`Imagen input blog ${titulo}`}
          />
          <div className={contentDesc}>
            <p>{formatDate(published_at)}</p>
            <p>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs/`;
  const res = await fetch(url);
  const inputs = await res.json();

  const paths = inputs.map((input) => ({
    params: { id: input.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

// !Esta parte corre en el servidor
// ? getServerSideProps() // baja frecuancia de actualizacion de items
export async function getStaticProps({ params: { id } }) {
  const url = `${process.env.API_URL}/blogs/${id}`;

  const res = await fetch(url);
  const input = await res.json();

  return {
    props: { input },
  };
}
// !Esta parte corre en el servidor
// ? getServerSideProps() // frecuencia de items
// export async function getServerSideProps({ query: { id } }) {
//    const url = `${process.env.API_URL}/blogs/${id}`;

//   console.log(url);
//   const res = await fetch(url);
//   const input = await res.json();
//   console.log(input);
//   return {
//     props: { input },
//   };
// }

export default ItemBlog;
