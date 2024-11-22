import { CoverParticles } from "@/components/CoverParticles/cover-particles";


export default function AboutMe() {
  return (
    <div>

      <CoverParticles />
      <section className="flex h-[60vw] justify-center items-center">

        <div className='relative bg-black border border-white h-[50vw] w-[80vw] m-[1em] opacity-80'></div>

        <div className='flex absolute z-10 left-[16vw] top-[13vw] left-[53vw] w-[30vw] h-[30vw] bg-black justify-center items-center rounded-full overflow-hidden border-2 border-white shadow-2xl'>
          <img className="relative object-cover w-[35vw] h-[35vw] " src="https://res.cloudinary.com/dfktz8zkt/image/upload/v1727401435/WhatsApp_Image_2024-05-24_at_10.31.54_PM-fotor-bg-remover-20240926224323_ssbcug.png" />
        </div>

        <div className="absolute text-[1.35vw] w-[30vw] h-[25vw] right-[15.5vw] top-[8.3vw] text-center ">
          <p>¡Hola! Soy Castillo Juan Carlos, un apasionado desarrollador backend 💻. Desde siempre, la tecnología ha sido mi motor, y me dedico a crear soluciones digitales eficientes que se adaptan a las necesidades de cada proyecto 🚀. Mi objetivo es encontrar un entorno donde pueda contribuir al crecimiento y éxito de una empresa, desarrollando sistemas sólidos, confiables y listos para escalar 📈.</p>
          <p>A lo largo de mi carrera, he trabajado en el diseño e implementación de herramientas que mejoran la funcionalidad de plataformas web 🌐 y facilitan la gestión eficiente de datos 📊. Mi enfoque siempre ha sido ofrecer soluciones prácticas, con énfasis en la calidad, el rendimiento y la facilidad de uso ⚙️.</p>
          <p>Ahora, estoy buscando una oportunidad fija donde pueda seguir desarrollándome como profesional 🚀, enfrentando nuevos desafíos 💪 y aportando todo lo aprendido para contribuir a proyectos innovadores y de impacto 🌟.</p>
        </div>
        <div className="absolute text-[1.42vw] font-bold left-[17.5vw] top-[45vw] " >
        Argentina, Buenos Aires 📍 (UTC -03:00)
        </div>
      </section>
    </div>
  );
}
