import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import { layout } from '../styles/Layout.module.css';

const Layout = ({ children, titlePage, guitarra }) => {
  return (
    <div className={layout}>
      <Head>
        <title>GuitarLA | {titlePage}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Guitar Sales" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header component */}
      <Header guitarra={guitarra} />
      {/* Header component */}

      {/* main component */}
      <main>{children}</main>
      {/* main component */}

      {/* Footer component */}
      <Footer />
      {/* Footer component */}
    </div>
  );
};

Layout.defaultProps = { guitarra: null };
export default Layout;
