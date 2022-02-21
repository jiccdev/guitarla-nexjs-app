import { Fragment } from 'react';

import Input from '../components/Input';
import { blog } from '../styles/Blog.module.css';

const ListadoBlog = ({ input, entradas }) => {
  return (
    <Fragment>
      <h2>Blog</h2>
      <div className={blog}>
        {entradas.map((input) => (
          <Input key={input.id} input={input} />
        ))}
      </div>
    </Fragment>
  );
};

export default ListadoBlog;
