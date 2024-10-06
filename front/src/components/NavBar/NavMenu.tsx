import Link from "next/link"
import { useEffect, useState } from "react";

export const NavMenu: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Función que se ejecuta en el evento de scroll
        const handleScroll = () => {
            if (window.scrollY > 50) { // Cambia el valor según necesites
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Añade el event listener
        window.addEventListener('scroll', handleScroll);

        // Limpia el event listener al desmontar el componente
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav>
            <ul className= {`${isScrolled ? "flex space-x-10 justify-center ml-[15vw] mr-[10vw]" : "flex space-x-10 justify-end ml-[15vw] mr-[10vw] " }`}>
                <li>
                    <Link className={`${isScrolled ? " text-gray2 transition duration-200 hover:text-white " : " text-gray2 transition duration-200 hover:text-gray1 "}`}
                        href={{
                            pathname: '/',
                        }}>
                        INICIO
                    </Link>
                </li>
                <li>
                    <Link className={`${isScrolled ? " text-gray2 transition duration-200 hover:text-white " : " text-gray2 transition duration-200 hover:text-gray1 "}`}
                        href={{
                            pathname: '/about',
                        }}>
                        SOBRE MI
                    </Link>
                </li>
                <li>
                    <Link className={`${isScrolled ? " text-gray2 transition duration-200 hover:text-white " : " text-gray2 transition duration-200 hover:text-gray1 "}`}
                        href= '#proyectos'>
                        PROYECTOS
                    </Link>
                </li>
                <li>
                <Link className={`${isScrolled ? " text-gray2 transition duration-200 hover:text-white " : " text-gray2 transition duration-200 hover:text-gray1 "}`}
                        href='#con'
                        >
                        CONTACTO
                    </Link>
                </li>

            </ul>
        </nav>
    )
}