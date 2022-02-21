import { Fragment } from 'react';
import Guitarra from './Guitarra';

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
