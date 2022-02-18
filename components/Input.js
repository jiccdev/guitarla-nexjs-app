import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../helpers';

const Input = ({ input }) => {
  const { titulo, resumen, imagen, published_at, id } = input;
  console.log(imagen.url);

  return (
    <article>
      <Image
        layout="responsive"
        src={imagen.url}
        alt={`Imagen blob${titulo}`}
        width={800}
        height={600}
      />
      <div>
        <h2>{titulo}</h2>
        <p>{formatDate(published_at)}</p>
        <p>{resumen}</p>
        <Link href={`/blog/${id}`}>Leer entrada</Link>
      </div>
    </article>
  );
};

export default Input;
