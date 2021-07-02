import Head from 'next/head';
import ServiceTemplate from '../components/ServiceTemplate';
import CopyTemplate from './../components/CopyTemplate';
import ClientsContainer from './../components/ClientsContainer';
import Gallery from './../components/Gallery';
import Footer from './../components/Footer';
import PageContent from './../components/PageContent';
import Header from './../components/Header';

export default function Home() {
  return (
    <div className='min-h-screen bg-primary-white'>
      <Head>
        <title>Create Next App</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Barlow:wght@600;900&display=swap&family=Fraunces:wght@700;900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className='h-full min-w-full '>
        <Header />
        <PageContent />
        <Footer />
      </main>
    </div>
  );
}
