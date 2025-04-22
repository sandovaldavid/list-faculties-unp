import { generateBasicMetadata } from '@/libs/seoConfig';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = generateBasicMetadata('about');

function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 mt-16 max-w-6xl">
            {/* Hero Section */}
            <section className="text-center mb-16 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Acerca del Sistema
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Una plataforma diseñada para la gestión eficiente de las facultades de la
                    Universidad Nacional de Piura.
                </p>
            </section>

            {/* Portfolio Project Section */}
            <section className="mb-16 bg-zinc-800/50 p-8 rounded-lg animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 text-white">Proyecto de Portafolio</h2>
                <p className="text-gray-300 mb-6">
                    Este sistema forma parte de mi portafolio profesional como desarrollador.
                    Representa mi capacidad para crear aplicaciones web completas con arquitecturas
                    modernas y eficientes. Puedes visitar mi portafolio completo para ver más
                    proyectos similares.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                    <Link
                        href="https://devsandoval.me"
                        target="_blank"
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-md text-white hover-lift"
                    >
                        Mi Portafolio
                    </Link>
                </div>

                <h3 className="text-xl font-bold mb-4 text-white">Sígueme en redes sociales</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    <a
                        href="https://instagram.com/dev.sandoval"
                        target="_blank"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 transition-colors rounded-md text-white hover-lift"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/images/social/instagram.svg"
                            width={20}
                            height={20}
                            alt="Instagram"
                            className="text-pink-500"
                        />
                        <span>Instagram</span>
                    </a>
                    <a
                        href="https://facebook.com/devsandoval.web"
                        target="_blank"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 transition-colors rounded-md text-white hover-lift"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/images/social/facebooksvg.svg"
                            width={20}
                            height={20}
                            alt="Facebook"
                            className="text-blue-500"
                        />
                        <span>Facebook</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/devsandoval"
                        target="_blank"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 transition-colors rounded-md text-white hover-lift"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/images/social/linkedin.svg"
                            width={20}
                            height={20}
                            alt="LinkedIn"
                            className="text-blue-700"
                        />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/sandovaldavid"
                        target="_blank"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 transition-colors rounded-md text-white hover-lift"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/images/social/github.svg"
                            width={20}
                            height={20}
                            alt="GitHub"
                            className="text-gray-200"
                        />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://twitter.com/dev_sandoval"
                        target="_blank"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 transition-colors rounded-md text-white hover-lift"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/images/social/x.svg"
                            width={20}
                            height={20}
                            alt="X"
                            className="text-blue-400"
                        />
                        <span>X</span>
                    </a>
                </div>
            </section>

            {/* University Section */}
            <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
                <div className="animate-fade-in-up">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                        Universidad Nacional de Piura
                    </h2>
                    <p className="text-gray-300 mb-4">
                        Fundada el 3 de marzo de 1961, la Universidad Nacional de Piura es una
                        institución pública de educación superior ubicada en el norte del Perú.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Con más de 60 años de trayectoria, la UNP ha formado a generaciones de
                        profesionales comprometidos con el desarrollo de la región Piura y del país.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <Link
                            href="https://www.unp.edu.pe"
                            target="_blank"
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-md text-white hover-lift"
                        >
                            Sitio Oficial
                        </Link>
                    </div>
                </div>
                <div className="bg-zinc-800 p-6 rounded-lg shadow-xl animate-scale-in">
                    <div className="aspect-video relative rounded-md overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-white">
                            <span className="text-lg font-semibold">
                                Universidad Nacional de Piura
                            </span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">Datos institucionales</h3>
                        <ul className="mt-2 space-y-2 text-gray-300">
                            <li className="flex items-center">
                                <span className="w-28 font-medium">Fundación:</span>
                                <span>3 de marzo de 1961</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-28 font-medium">Ubicación:</span>
                                <span>Piura, Perú</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-28 font-medium">Facultades:</span>
                                <span>14 facultades activas</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-28 font-medium">Lema:</span>
                                <span>&quot;Estudio y Trabajo&quot;</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Project Information */}
            <section className="mb-16 bg-zinc-800/50 p-8 rounded-lg animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 text-white">
                    Sistema de Gestión de Facultades
                </h2>
                <p className="text-gray-300 mb-6">
                    Este proyecto es una solución web creada para mi portafolio profesional que
                    demuestra mis capacidades de desarrollo en Next.js, API REST, y diseño de
                    interfaces con TailwindCSS. El sistema tiene como objetivo proporcionar una
                    forma eficiente de gestionar la información de las facultades de la Universidad
                    Nacional de Piura.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-zinc-800 p-6 rounded-lg shadow hover-lift">
                        <div className="text-blue-500 text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-bold mb-2 text-white">Objetivo</h3>
                        <p className="text-gray-300">
                            Facilitar la administración de las facultades universitarias mediante un
                            sistema CRUD intuitivo y eficiente, demostrando buenas prácticas de
                            desarrollo.
                        </p>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg shadow hover-lift">
                        <div className="text-blue-500 text-4xl mb-4">⚙️</div>
                        <h3 className="text-xl font-bold mb-2 text-white">Tecnologías</h3>
                        <p className="text-gray-300">
                            Desarrollado con Next.js, TailwindCSS y MySQL para garantizar
                            rendimiento, escalabilidad y una experiencia de usuario óptima.
                        </p>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg shadow hover-lift">
                        <div className="text-blue-500 text-4xl mb-4">🔄</div>
                        <h3 className="text-xl font-bold mb-2 text-white">Funcionalidades</h3>
                        <p className="text-gray-300">
                            Creación, visualización, actualización y eliminación de facultades, con
                            gestión de imágenes y validación de datos en tiempo real.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="mb-16 animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">
                    Desarrollo del Proyecto
                </h2>
                <div className="relative">
                    {/* Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-blue-600 border-4 border-zinc-800"></div>
                            <div className="ml-4 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                                <div className="bg-zinc-800 p-5 rounded-lg shadow-lg md:ml-auto md:mr-8">
                                    <h3 className="text-xl font-bold text-white">Versión 1.0.0</h3>
                                    <time className="text-sm text-blue-400 mb-2 block">
                                        Enero 2025
                                    </time>
                                    <p className="text-gray-300">
                                        Lanzamiento inicial con funcionalidades básicas CRUD para la
                                        gestión de facultades.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-blue-600 border-4 border-zinc-800"></div>
                            <div className="ml-4 md:ml-auto md:w-1/2 md:pl-8 md:text-left">
                                <div className="bg-zinc-800 p-5 rounded-lg shadow-lg md:mr-auto md:ml-8">
                                    <h3 className="text-xl font-bold text-white">Versión 2.0.0</h3>
                                    <time className="text-sm text-blue-400 mb-2 block">
                                        Abril 2025
                                    </time>
                                    <p className="text-gray-300">
                                        Mejoras en la interfaz de usuario, optimización del
                                        rendimiento y adición de funcionalidades avanzadas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-blue-600 border-4 border-zinc-800"></div>
                            <div className="ml-4 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                                <div className="bg-zinc-800 p-5 rounded-lg shadow-lg md:ml-auto md:mr-8">
                                    <h3 className="text-xl font-bold text-white">
                                        Próximas Actualizaciones
                                    </h3>
                                    <time className="text-sm text-blue-400 mb-2 block">
                                        Planificado
                                    </time>
                                    <p className="text-gray-300">
                                        Implementación de módulos adicionales para gestión de
                                        docentes y programas académicos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="mb-16 animate-fade-in">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">
                    Equipo de Desarrollo
                </h2>
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
                    <div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center hover-lift">
                        <div className="w-24 h-24 rounded-full bg-zinc-700 mx-auto mb-4 flex items-center justify-center">
                            <span className="text-4xl">👨‍💻</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">David Sandoval</h3>
                        <p className="text-blue-400 mb-2">Desarrollador Full Stack</p>
                        <p className="text-gray-300 text-sm">
                            Responsable del diseño y desarrollo completo del sistema. Especializado
                            en Next.js, React, TailwindCSS y desarrollo de APIs RESTful.
                        </p>
                        <div className="mt-4">
                            <a
                                href="https://devsandoval.me"
                                target="_blank"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                                rel="noopener noreferrer"
                            >
                                devsandoval.me
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="text-center animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 text-white">Contacto</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Si tienes preguntas sobre este proyecto o estás interesado en trabajar conmigo,
                    no dudes en contactarme a través de mis redes sociales o directamente por
                    correo.
                </p>
                <div className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-8 py-3 rounded-md text-white font-medium hover-lift">
                    <a href="mailto:contact@devsandoval.me">Enviar mensaje</a>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
