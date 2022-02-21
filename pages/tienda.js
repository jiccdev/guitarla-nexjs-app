import React from 'react';
import Layout from '../components/Layout';
import Listado from '../components/Listado';
import { contenedor, itemLista } from '../styles/Tienda.module.css';

const Tienda = ({ guitarras }) => {
  return (
    <Layout titlePage="Tienda">
      <main className={contenedor}>
        <h2>Nuestra Colección</h2>
        <div className={itemLista}>
          <Listado guitarras={guitarras} />
        </div>
      </main>
    </Layout>
  );
};

// Esta seccion corre en el servidor
// Tambien se debe escribir en url o paginas no en componentes
// Solo estas consultas a la api desde estos archivos
export async function getServerSideProps() {
  // La consulta puede ser ordenada por precio u otro atributos creados
  const url = `${process.env.API_URL}/guitarras`;
  const res = await fetch(url);
  const guitarras = await res.json();

  return {
    props: {
      guitarras,
    },
  };
}

export default Tienda;
