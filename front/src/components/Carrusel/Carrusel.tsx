'use client'
import { useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "../Cards/CardsCarrusel";

interface ArrowProps {
  className: string;
  onClick: () => void;
}

// Botón personalizado "Prev"
const PrevArrow = (props: ArrowProps) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} bg-blue-500 text-white rounded-full p-3 absolute left-[-30px] top-1/2 transform -translate-y-1/2 hover:bg-blue-700 focus:outline-none`}
      onClick={onClick}
    >
      &#10094; {/* Icono de flecha hacia la izquierda */}
    </button>
  );
};

// Botón personalizado "Next"
const NextArrow = (props: ArrowProps) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} bg-blue-500 text-white rounded-full p-3 absolute right-[-30px] top-1/2 transform -translate-y-1/2 hover:bg-blue-700 focus:outline-none`}
      onClick={onClick}
    >
      &#10095; {/* Icono de flecha hacia la derecha */}
    </button>
  );
};

interface Producto {
  id: number;
  name: string;
  src: string;
  alt: string;
  href: string;
}

export const Carrusel = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  // const fetchProductos = () => {
    
  // };

  useEffect(() => {
    const data = [{id:1 ,name: "5tart Travel",src: "https://res.cloudinary.com/dfktz8zkt/image/upload/v1728428007/cbey16iyadftprvqda3k.png" , alt: "Proyecto grupal: desarrollo de un marketplace especializado en la compra y venta de viajes. La plataforma permite a los usuarios explorar, publicar y adquirir experiencias de viaje, facilitando la conexión entre agencias y viajeros de manera eficiente e intuitiva.", href: "https://5tart-travel-front-w2ip.vercel.app/" },{id: 2, name: "Las Divas De Romi",src: "https://res.cloudinary.com/dfktz8zkt/image/upload/v1732223080/ynlk1fioljxs2krzlhq3.png", alt:"Es un eCommerce de productos y cursos online una plataforma que permite la compra de productos físicos y digitales, como productos, así como el acceso a cursos en línea en diversas áreas. Los usuarios pueden comprar de manera fácil y segura, con pagos electrónicos y acceso inmediato a los cursos. (EN PROCESO)", href: "https://personal-woad-phi.vercel.app/" },]
    setProductos([...data])  
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    prevArrow: <PrevArrow className="" onClick={() => {}} />, // Botón personalizado "Prev"
    nextArrow: <NextArrow className="" onClick={() => {}} />, // Botón personalizado "Next"
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full flex justify-center mb-[10vw] bg-gray-900">
      <div className="w-full ">
          <Slider {...settings}>
            {productos
              .map((producto) => (
                <div className="py-10" key={producto.id}>
                    <Card
                      src={producto.src}
                      name={producto.name}
                      alt={producto.alt}
                      href={producto.href}
                    />
                </div>
              ))}
          </Slider>
      </div>
    </div>
  );
};
