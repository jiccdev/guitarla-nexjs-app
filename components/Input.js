import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../helpers';
import { article, contenido, fecha } from '../styles/Input.module.css';

const Input = ({ input }) => {
  const { titulo, resumen, imagen, published_at, id } = input;

  return (
    <article className={article}>
      <Image
        priority="true"
        layout="responsive"
        src={imagen.url}
        alt={`Imagen blob${titulo}`}
        width={800}
        height={600}
      />
      <div className={contenido}>
        <h3>{titulo}</h3>
        <p>{resumen}</p>
        <p className={fecha}>Creado el {formatDate(published_at)}</p>
        <Link href={`/blog/${id}`}>Leer entrada</Link>
      </div>
    </article>
  );
};

export default Input;
