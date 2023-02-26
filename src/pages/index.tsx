import Head from 'next/head';
import { useSessionStorage } from "usehooks-ts";

import Home from '../components/Home';
import DrawerLayout from '../components/NavBar/DrawerLayout';

export default function Index() {
  const [, setOpen] = useSessionStorage("drawer", false);
  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <>
      <Head>
        <title>Gustavo Silveira</title>
        <meta name="description" content="Gustavo Silveira's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='bg-base-100 flex-col'>
          <DrawerLayout>
            <Home />
          </DrawerLayout>



          {/* About */}

          {/* Projects */}

          {/* Footer */}
        </div>
      </main>
    </>
  );
}