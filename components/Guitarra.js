import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { itemG, contenido, precioGuitarra } from '../styles/Tienda.module.css';

const Guitarra = ({ item }) => {
  const { nombre, imagen, descripcion, precio, url } = item;

  const formattCurrent = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return (
    <div className={itemG}>
      <Image
        priority="true"
        layout="responsive"
        src={imagen.url}
        width={150}
        height={350}
        alt={`Imagen Guitarra${nombre}`}
      />
      <div className={contenido}>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p className={precioGuitarra}>
          Precio: {formattCurrent.format(precio)}
        </p>
        <Link href={`/guitarras/${url}`}>Ver Guitara</Link>
      </div>
    </div>
  );
};

export default Guitarra;
