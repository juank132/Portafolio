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
            <ul className= {`${isScrolled ? "flex space-x-10 justify-center ml-[15vw] mr-[10vw] font-bold" : "flex space-x-10 justify-end ml-[15vw] mr-[10vw] font-bold " }`}>
                <li>
                    <Link className={`${isScrolled ? " text-gray-300 mr-[3vw] transition duration-200 hover:text-yellow-500 " : " text-gray-300 transition mr-[3vw] duration-200 hover:text-gray-500 "}`}
                        href='#inicio'>
                        INICIO
                    </Link>
                </li>
                <li>
                    <Link className={`${isScrolled ? " text-gray-300 mr-[3vw] transition duration-200 hover:text-yellow-500 " : " text-gray-300 transition mr-[3vw] duration-200 hover:text-gray-500 "}`}
                        href={{
                            pathname: '/about_me',
                        }}>
                        SOBRE MI
                    </Link>
                </li>
                <li>
                    <Link className={`${isScrolled ? " text-gray-300 mr-[3vw] transition duration-200 hover:text-yellow-500 " : " text-gray-300 transition mr-[3vw] duration-200 hover:text-gray-500 "}`}
                        href= '#proyectos'>
                        PROYECTOS
                    </Link>
                </li>


            </ul>
        </nav>
    )
}