import Image from 'next/image';
import Layout from '../components/Layout';
import {
  contenedor,
  contenido,
  descipcion,
} from '../styles/Nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout titlePage="Nosotros">
      <div className={contenedor}>
        <main className={contenido}>
          <Image
            layout="responsive"
            src="/img/643068.png"
            alt="Logo GuitarLA"
            height={200}
            width={300}
          />
          <div className={descipcion}>
            <h2>Nosotros</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Nosotros;
