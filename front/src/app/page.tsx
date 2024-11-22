'use client';
import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar';
import Link from 'next/link';
import { Fjalla_One} from 'next/font/google'
import { Carrusel } from '@/components/Carrusel/Carrusel';
import { CoverParticles } from '@/components/CoverParticles/cover-particles';


const FjallaOne = Fjalla_One({ subsets: ['latin'], weight: '400' });

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

        <CoverParticles />

        <section id='inicio' className='bg-gray-900 flex w-[full] h-[45vw]  '>
          {/* <div className='bg-gray-900 h-[45vw] w-[65vw]'></div>
          <div className='bg-azulM h-[45vw] w-[35vw]'></div> */}

          <div className='flex absolute h-[70vh] w-[70vw] '>
            <div className='flex absolute left-[40vw] top-[7vw] left-[52vw] w-[25vw] h-[25vw] bg-azulM justify-center items-center rounded-full overflow-hidden border-2 border-gray-900 shadow-2xl'>
              <img className="relative object-cover w-[35vw] h-[35vw] " src="https://res.cloudinary.com/dfktz8zkt/image/upload/v1727401435/WhatsApp_Image_2024-05-24_at_10.31.54_PM-fotor-bg-remover-20240926224323_ssbcug.png" />
            </div>
            <Link className='absolute left-[53vw] top-[33vw] w-[3.5vw] h-[3.5vw] bg-azulM justify-center items-center rounded-full overflow-hidden shadow-2xl transition duration-200 transform hover:scale-150' href={'https://www.linkedin.com/in/juan-carlos-castillo-985ab02b0/'} target="_blank" rel="noopener noreferrer">
              <img className="relative object-cover" src="https://res.cloudinary.com/dfktz8zkt/image/upload/v1728347272/fh3byti14rt8vemcedsy.png" />

            </Link>
            <Link className='absolute left-[62vw] top-[33vw] w-[3.5vw] h-[3.5vw] bg-gray-900 justify-center items-center rounded-full overflow-hidden shadow-2xl transition duration-200 transform hover:scale-150' href={'https://github.com/juank132'} target="_blank" rel="noopener noreferrer">
              <img className="relative object-cover" src="https://res.cloudinary.com/dfktz8zkt/image/upload/v1728347506/htb2bdf1r8j8ywaqigph.png" />

            </Link>
            <Link className='absolute left-[71vw] top-[33vw] w-[3.5vw] h-[3.5vw] bg-gray-900 justify-center items-center rounded-full overflow-hidden shadow-2xl transition duration-200 transform hover:scale-150' href='mailto:juancarlos_castillo@hotmail.com.ar'>
              <img className="relative object-cover" src="https://res.cloudinary.com/dfktz8zkt/image/upload/v1728348251/kumlq9yosnvg9mldl8m7.png" />
            </Link>
            {/* <h2 className={`${FjallaOne.className} text-azulM absolute left-[37.5vw] top-[27vw] text-[3.5vw]`}>FullStack </h2>
              <h2 className={`${FjallaOne.className} text-gray-900 absolute right-[6.5vw] top-[27vw] text-[3.5vw]`}> Developer</h2> */}
          </div>

          <div>
            <h1 className={`${FjallaOne.className} absolute text-white absolute left-[13vw] top-[13vw] text-[5vw]`}>CASTILLO</h1>
            <h1 className={`${FjallaOne.className} absolute text-white absolute left-[13vw] top-[18.5vw] text-[5vw]`}>JUAN CARLOS</h1>
            <p className={`${FjallaOne.className} absolute p-[.3vw] bg-yellow-500 text-gray-900 absolute left-[12.5vw] top-[25.7vw] text-[1.5vw] rounded-full`}>Est. ING en Electronica, Desarrollador de Software</p>
            <p className={`${FjallaOne.className} absolute p-[.3vw] text-gray-100 w-[30vw] text-gray-300 left-[12.5vw] top-[29vw] text-[1.1vw] rounded-full`}>Estudiante de Ingeniería en Electrónica y Desarrollador de Software con experiencia en proyectos personales y por encargo. Apasionado por la tecnología, especializado en backend y con habilidades en frontend. Busco contribuir con soluciones innovadoras mientras sigo creciendo profesionalmente.</p>
          </div>

          <Link href={'/'}>
            <div className={`${FjallaOne.className} flex absolute items-center  p-[1.5vw] pr-[6.5vw] pl-[1.5vw] left-[13.5vw] top-[39vw] bg-gray-900 border-2 border-yellow-500 rounded-[20px] transition duration-200 transform hover:scale-110`}>
              <p className='absolute text-[1.1vw]'>Contáctame</p>
            </div>
          </Link>

          <Link href="././CV_Castillo_Juan_Carlos.pdf" download>
            <div className={`${FjallaOne.className} flex absolute items-center text-gray-900 p-[1.5vw] pr-[7.5vw] pl-[1.5vw] left-[25.6vw] top-[39vw] bg-yellow-500 border-2 border-yellow-500 rounded-[20px] transition duration-200 transform hover:scale-110`}>
              <p className='absolute text-[1.1vw]'>DESCARGAR CV</p>
            </div>
          </Link>

        </section>

        <section className="flex w-full justify-center bg-gray-900">
          <div className="flex flex-wrap justify-center bg-gray-900 w-[100vw] max-w-[80vw] gap-[1em]">
            <h1 className={`${FjallaOne.className} relative w-full text-center text-white mt-[.5em] p-[1vw] rounded-[30px] text-[5vw]`}>EXPERIENCIAS</h1>

            <div className="relative shadow-xl bg-azulM p-[1vw] w-[38vw] h-[17.5vw] rounded-[30px] transition duration-200 transform hover:scale-105">
              <h2 className={`${FjallaOne.className} text-[2.5vw] text-yellow-500`}>
                Freelance
              </h2>
              <h3 className={`${FjallaOne.className} text-[1.7vw]`}>Desarrollador Fullstack</h3>
              <p className={`${FjallaOne.className} text-[1.3vw] mb-[1vw] text-gray-300`}>
                06/2024 - present
              </p>
              <p className={`${FjallaOne.className} text-[1.25vw] text-gray-300`}>
                He trabajado en proyectos personales y por encargo, con experiencia en
                trabajo en equipo. Me especializo en backend, pero también tengo
                habilidades en frontend cuando es necesario.
              </p>
            </div>

            <div className="relative shadow-xl bg-azulM p-[1vw] w-[38vw] h-[17.5vw] rounded-[30px] transition duration-200 transform hover:scale-105">
              <h2 className={`${FjallaOne.className} text-[2.5vw] text-yellow-500`}>
                COTO
              </h2>
              <h3 className={`${FjallaOne.className} text-[1.7vw]`}>Armador de pedidos online</h3>
              <p className={`${FjallaOne.className} text-[1.3vw] mb-[1vw] text-gray-300`}>
                11/2022 - 11/2023
              </p>
              <p className={`${FjallaOne.className} text-[1.25vw] text-gray-300`}>
                Experiencia como armador de pedidos digitales, atención al cliente y
                manteniendo el orden y la limpieza de productos y áreas de trabajo.
              </p>
            </div>

            <div className="relative shadow-xl bg-azulM p-[1vw] w-[38vw] h-[17.5vw] rounded-[30px] transition duration-200 transform hover:scale-105">
              <h2 className={`${FjallaOne.className} text-[2.5vw] text-yellow-500`}>
                Siroppo
              </h2>
              <h3 className={`${FjallaOne.className} text-[1.7vw]`}>Cajero y Heladero</h3>
              <p className={`${FjallaOne.className} text-[1.3vw] mb-[1vw] text-gray-300`}>
                10/2022 - 12/2022
              </p>
              <p className={`${FjallaOne.className} text-[1.25vw] text-gray-300`}>
                Tengo experiencia en atención al cliente, manejo de caja, cobros y
                cierres diarios, además de realizar aperturas y cierres del local
                asegurando todo en orden.
              </p>
            </div>

            <div className="relative shadow-xl bg-azulM p-[1vw] w-[38vw] h-[17.5vw] rounded-[30px] transition duration-200 transform hover:scale-105">
              <h2 className={`${FjallaOne.className} text-[2.5vw] text-yellow-500`}>
                Tienda de Helados
              </h2>
              <h3 className={`${FjallaOne.className} text-[1.7vw]`}>
                Operario de producción en heladería
              </h3>
              <p className={`${FjallaOne.className} text-[1.3vw] mb-[1vw] text-gray-300`}>
                10/2020 - 06/2021
              </p>
              <p className={`${FjallaOne.className} text-[1.25vw] text-gray-300`}>
                Tareas principales en el procesamiento de los ingredientes de los
                helados, mantener la limpieza en la fábrica, y ayudante de jefe de
                producción.
              </p>
            </div>
          </div>
        </section>

        <section id='proyectos' className='flex w-[full] bg-gray-900 justify-center items-center'>
          <div className='w-[90vw] '>
            <h1 className={`${FjallaOne.className} text-white  mb-[3vw] mt-[10vw] text-[5vw]`}>PROYECTOS</h1>

            <Carrusel />

          </div>
        </section>

      </main>

      <footer className="text-center py-6 bg-gray-700">
        <p className="text-gray-300">&copy; 2024 Juan Carlos Castillo - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
