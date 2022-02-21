import Image from 'next/image';
import Layout from '../../components/Layout';
import { formatDate } from '../../helpers';
import {
  contenedor,
  item,
  formulario,
} from '../../styles/ItemsTienda.module.css';

const Producto = ({ guitarra }) => {
  const { nombre, imagen, descripcion, published_at } = guitarra[0];
  return (
    <Layout titlePage={`Guitarra ${nombre}`}>
      <main className={contenedor}>
        <h2>Item Blog</h2>
        <article className={item}>
          <h2>{nombre}</h2>
          <Image
            src={imagen.url}
            layout="responsive"
            width={180}
            height={350}
            alt={`Imagen item Guitarra ${nombre}`}
          />
          <div>
            <p>{formatDate(published_at)}</p>
            <p>{descripcion}</p>
            <form className={formulario}>
              <label>Cantidad</label>
              <select>
                <option value="">Seleccione</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <input type="submit" value="Agregar al Carro" />
            </form>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
  const res = await fetch(urlGuitarra);
  const guitarra = await res.json();

  return {
    // A esto se le llama object literal enhansment
    props: { guitarra },
  };
}

export default Producto;
