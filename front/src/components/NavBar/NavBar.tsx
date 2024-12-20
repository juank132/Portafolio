'use client'
import { useEffect, useState } from "react";
import { NavMenu } from "./NavMenu";

export default function NavBar() {
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
        <section className={`sticky text-[1em] top-0 py-[1.3vw] z-10 transition-colors duration-300 shadow-xl ${isScrolled ? 'bg-gray-900 text-white' : 'bg-azulM text-black'}`}>
            <NavMenu />
        </section>
    )
}