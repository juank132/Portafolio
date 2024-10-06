import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../components/NavBar/NavBar';
import { Carrusel } from '@/components/Carrusel/Carrusel';
import { FjallaOne } from './layout';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Head>
        <title>Mi Portafolio</title>
        <meta name="description" content="Portafolio de Juan Carlos Castillo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">

        <section className='flex w-[full] h-[full] bg-black justify-center items-center '>
          <div className='bg-gray-600 h-[92vh] w-[50vw]'></div>
          <div className='bg-azulM h-[92vh] w-[50vw]'></div>

          <div className='flex absolute  h-[70vh] w-[70vw] justify-center'>
            <div className='flex w-[20vw] h-[20vw] bg-azulM justify-center items-center rounded-full overflow-hidden border-2 border-gray-600'>
              <img className="relative object-cover w-[30vw] h-[30vw] " src="https://res.cloudinary.com/dfktz8zkt/image/upload/v1727401435/WhatsApp_Image_2024-05-24_at_10.31.54_PM-fotor-bg-remover-20240926224323_ssbcug.png" />
            </div>
              <h2 className={`${FjallaOne.className} text-azulM absolute left-[21vw] top-[25vw] text-[4vw]`}>FullStack </h2>
              <h2 className={`${FjallaOne.className} text-gray-600 absolute right-[19vw] top-[25vw] text-[4vw]`}> Developer</h2>
          </div>
        </section>

        {/* Sobre mí */}
        <section id="sobre-mi" className="py-10">
          <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
          <p className="text-gray-300">
            Soy un desarrollador fullstack con experiencia en tecnologías como JavaScript,
            TypeScript, React, NestJS y PostgreSQL. Me apasiona construir soluciones efectivas y optimizadas.
          </p>
        </section>



        {/* Proyectos */}
        <section id="proyectos" className="py-10">
          <Carrusel />
        </section>

        {/* Contacto */}
        <section id="con" className="py-10">
          <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
          <p className="text-gray-300">Si estás interesado en trabajar conmigo o tienes alguna pregunta, no dudes en contactarme:</p>
          <Link href="mailto:miemail@example.com" className="text-blue-500 mt-2 block">
            miemail@example.com
          </Link>
        </section>
      </main>

      <footer className="text-center py-6 bg-gray-400">
        <p className="text-gray-800">&copy; 2024 Juan Carlos Castillo - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
