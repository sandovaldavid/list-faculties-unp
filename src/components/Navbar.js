'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [animateMenu, setAnimateMenu] = useState(false);
    const pathname = usePathname();

    // Efecto para detectar el scroll y aplicar estilos
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Cerrar el menú móvil cuando cambia la ruta
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Controla la animación del menú móvil
    const toggleMenu = () => {
        if (!isOpen) {
            setIsOpen(true);
            setTimeout(() => setAnimateMenu(true), 10);
        } else {
            setAnimateMenu(false);
            setTimeout(() => setIsOpen(false), 300);
        }
    };

    return (
        <nav
            className={`w-full fixed top-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-white text-zinc-800 shadow-md' : 'bg-zinc-800 text-white'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo/Brand con icono educativo */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className={`flex items-center hover:text-blue-600 transition duration-300 ${
                                pathname === '/' && 'text-blue-500'
                            }`}
                        >
                            <div className="flex items-center mr-2">
                                <svg
                                    className={`w-8 h-8 ${scrolled ? 'text-blue-600' : 'text-blue-400'}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 14l9-5-9-5-9 5 9 5z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col leading-none">
                                <h3
                                    className={`text-lg md:text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-zinc-800' : 'text-white'}`}
                                >
                                    Facultades UNP
                                </h3>
                                <span className="text-xs opacity-75 hidden sm:block">
                                    Universidad Nacional de Piura
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu con indicador de página activa */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link
                            href="/faculties"
                            className={`relative px-3 py-2 rounded-md transition duration-300 ${
                                pathname === '/faculties'
                                    ? `font-medium ${scrolled ? 'text-blue-600' : 'text-blue-400'}`
                                    : `${scrolled ? 'text-zinc-600 hover:text-blue-600' : 'text-gray-300 hover:text-white hover:bg-zinc-700'}`
                            }`}
                        >
                            <span className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                                Facultades
                            </span>
                            {pathname === '/faculties' && (
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 ${scrolled ? 'bg-blue-600' : 'bg-blue-400'}`}
                                ></span>
                            )}
                        </Link>

                        <Link
                            href="/about"
                            className={`relative px-3 py-2 rounded-md transition duration-300 ${
                                pathname === '/about'
                                    ? `font-medium ${scrolled ? 'text-blue-600' : 'text-blue-400'}`
                                    : `${scrolled ? 'text-zinc-600 hover:text-blue-600' : 'text-gray-300 hover:text-white hover:bg-zinc-700'}`
                            }`}
                        >
                            <span className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                Acerca de
                            </span>
                            {pathname === '/about' && (
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 ${scrolled ? 'bg-blue-600' : 'bg-blue-400'}`}
                                ></span>
                            )}
                        </Link>

                        <div className="h-6 mx-2 border-l border-gray-400 opacity-30"></div>

                        <Link
                            href="/new"
                            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                                pathname === '/new'
                                    ? `${scrolled ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}`
                                    : `${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`
                            }`}
                        >
                            <svg
                                className="w-5 h-5 mr-1.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                            <span>Nueva Facultad</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button con animación mejorada */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                            className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 focus:outline-none ${
                                scrolled
                                    ? 'text-zinc-800 hover:bg-gray-200'
                                    : 'text-white hover:bg-zinc-700'
                            }`}
                        >
                            <div className="relative w-6 h-6">
                                <span
                                    className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                                        scrolled ? 'bg-zinc-800' : 'bg-white'
                                    } ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}
                                ></span>
                                <span
                                    className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                                        scrolled ? 'bg-zinc-800' : 'bg-white'
                                    } ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                                ></span>
                                <span
                                    className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                                        scrolled ? 'bg-zinc-800' : 'bg-white'
                                    } ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu con animación de deslizamiento */}
            {isOpen && (
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${
                        scrolled ? 'bg-white text-zinc-800' : 'bg-zinc-800 text-white'
                    } ${animateMenu ? 'max-h-64' : 'max-h-0'}`}
                    style={{ transition: 'max-height 300ms ease-in-out' }}
                >
                    <div className="px-4 pt-2 pb-4 space-y-1.5">
                        <Link
                            href="/faculties"
                            className={`block px-4 py-3 rounded-lg transition duration-200 ${
                                pathname === '/faculties'
                                    ? `font-medium ${scrolled ? 'bg-blue-50 text-blue-600' : 'bg-zinc-700 text-blue-400'}`
                                    : `${scrolled ? 'hover:bg-gray-100' : 'hover:bg-zinc-700'}`
                            }`}
                        >
                            <span className="flex items-center">
                                <svg
                                    className={`w-5 h-5 mr-3 ${pathname === '/faculties' ? (scrolled ? 'text-blue-600' : 'text-blue-400') : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                                Facultades
                            </span>
                        </Link>

                        <Link
                            href="/about"
                            className={`block px-4 py-3 rounded-lg transition duration-200 ${
                                pathname === '/about'
                                    ? `font-medium ${scrolled ? 'bg-blue-50 text-blue-600' : 'bg-zinc-700 text-blue-400'}`
                                    : `${scrolled ? 'hover:bg-gray-100' : 'hover:bg-zinc-700'}`
                            }`}
                        >
                            <span className="flex items-center">
                                <svg
                                    className={`w-5 h-5 mr-3 ${pathname === '/about' ? (scrolled ? 'text-blue-600' : 'text-blue-400') : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                Acerca de
                            </span>
                        </Link>

                        <div className="border-t border-gray-200 dark:border-zinc-700 my-3 opacity-30"></div>

                        <Link
                            href="/new"
                            className={`flex items-center justify-center px-4 py-3 rounded-lg transition-all duration-300 text-white ${
                                pathname === '/new'
                                    ? 'bg-blue-600 font-medium'
                                    : 'bg-blue-500 hover:bg-blue-600'
                            }`}
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                            <span>Nueva Facultad</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
