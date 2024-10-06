'use client'
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "../Cards/CardsCarrusel";
import BouncingDotsLoader from "@/ui/animacion";

// Botón personalizado "Prev"
const PrevArrow = (props: any) => {
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
const NextArrow = (props: any) => {
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

export const Carrusel = () => {
  const [productos, setProductos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProductos = async () => {
    try {
      const response = await fetch(
        "https://back-de-divas-latest.onrender.com/productos"
      );
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      throw new Error("Error en la carga de productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />, // Botón personalizado "Prev"
    nextArrow: <NextArrow />, // Botón personalizado "Next"
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
    <div className="w-full flex justify-center mb-12 bg-gray1">
      <div className="w-full max-w-[1200px]">
        {loading ? (
          <BouncingDotsLoader />
        ) : productos.length === 0 ? (
          <p>No agencias available</p>
        ) : (
          <Slider {...settings}>
            {productos
              .filter((producto) => producto.isActive)
              .map((producto) => (
                <div className="py-10" key={producto.id}>
                  <Link href={`/producto/${producto.id}`} passHref>
                    <Card
                      src={producto.listImg[0]}
                      name={producto.name}
                      alt={producto.description}
                      price={producto.price}
                    />
                  </Link>
                </div>
              ))}
          </Slider>
        )}
      </div>
    </div>
  );
};
