import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout className="heading" titlePage="Inicio">
      <h1>Next App</h1>
      <Link href="/nosotros">
        <a>A nosotros</a>
      </Link>
    </Layout>
  );
}
