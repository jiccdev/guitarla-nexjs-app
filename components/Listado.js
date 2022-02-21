import { Fragment } from 'react';
import Guitarra from './Guitarra';
import { itemG } from '../styles/Tienda.module.css';

const Listado = ({ guitarras }) => {
  return (
    <Fragment>
      {guitarras.map((item) => (
        <Guitarra key={item.id} item={item} />
      ))}
    </Fragment>
  );
};

export default Listado;
