import Layout from '../components/Layout';
import Input from '../components/Input';
import { contenedor, blog } from '../styles/Blog.module.css';

const Blog = ({ inputs }) => {
  return (
    <Layout titlePage="Blog">
      <main className={contenedor}>
        <h2>Blog</h2>
        <div className={blog}>
          {inputs.map((input) => (
            <Input key={input.id} input={input} />
          ))}
        </div>
      </main>
    </Layout>
  );
};
// Nota
// Usar serverSideProps cuando el contendio tenga que cambiar muy seguidp
// Usar staticProps cuando el contenido no cambia muy frecuente
// El export tambien se hace dsiponible en el mismo componentes
// using serverSideProps
export async function getStaticProps() {
  const url = 'http://localhost:1337/blogs/';
  const res = await fetch(url);
  const inputs = await res.json();
  console.log(inputs);
  return {
    props: {
      inputs,
    },
  };
}

export default Blog;
