import Head from 'next/head';

import Home from '../components/Home';
import DrawerLayout from '../components/NavBar/DrawerLayout';
import Skills from '../components/Skills';
import About from '../components/About';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

export default function Index() {
  return (
    <>
      <Head>
        <title>Gustavo Silveira</title>
        <meta name="description" content="Gustavo Silveira's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/flavicon.ico" />
      </Head>

      <main>
        <div className='bg-base-100 flex-col'>
          <DrawerLayout>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Footer />
          </DrawerLayout>
        </div>
      </main>
    </>
  );
}