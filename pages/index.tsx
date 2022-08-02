import Head from 'next/head';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Flow } from '../components/main';
import { MobileCard } from '../components/mobile-pages';


export default function Home() {
  return (
    <div className='text-white'>
      <Head>
        <title>Tiny Colony Community Page</title>
        <meta name='description' content='Community Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='hidden lg:block'>
        <Header />
        <main>
          <Flow/>
        </main>
        <Footer />
      </div>
      <div className='block overflow-visible lg:hidden lg:overflow-hidden'>
				<MobileCard />
			</div>
    </div>
  );
}
