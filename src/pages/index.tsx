import Head from 'next/head';
import { useEffect } from 'react';

import Home from '../components/Home';
import DrawerLayout from '../components/NavBar/DrawerLayout';

export default function Index() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <Head>
        <title>Gustavo Silveira</title>
        <meta name="description" content="Gustavo Silveira's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <BrowserRouter> */}
        <div className='bg-base-100 flex-col'>
          <DrawerLayout>
            <Home />

            {/* About */}

            {/* Projects */}

            {/* Footer */}

          </DrawerLayout>
        </div>
        {/* </BrowserRouter> */}
      </main>
    </>
  );
}