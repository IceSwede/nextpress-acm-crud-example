import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center min-h-screen bg-slate-50'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      {router.pathname === '/' && <Hero />}

      {router.pathname !== '/' && (
        <div className='container grow'>{children}</div>
      )}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'NextPress | Next.js with Headless WordPress',
  description: 'Next.js and WordPress: Proof of concept',
  keywords: 'WordPress, Next.js, Graphql',
};
