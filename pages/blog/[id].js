const ItemBlog = ({ input }) => {
  console.log(input);
  return <div>ItemBlog</div>;
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs/`;
  const res = await fetch(url);
  const inputs = await res.json();

  const paths = inputs.map((input) => ({
    params: { id: input.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

// !Esta parte corre en el servidor
// ? getServerSideProps() // baja frecuancia de actualizacion de items
export async function getStaticProps({ params: { id } }) {
  const url = `${process.env.API_URL}/blogs/${id}`;

  const res = await fetch(url);
  const input = await res.json();

  return {
    props: { input },
  };
}
// !Esta parte corre en el servidor
// ? getServerSideProps() // frecuencia de items
// export async function getServerSideProps({ query: { id } }) {
//    const url = `${process.env.API_URL}/blogs/${id}`;

//   console.log(url);
//   const res = await fetch(url);
//   const input = await res.json();
//   console.log(input);
//   return {
//     props: { input },
//   };
// }

export default ItemBlog;
