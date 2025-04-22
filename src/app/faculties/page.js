import FacultyCard from '@/components/facultyCard';
import { pool } from '@/libs/mysql';
import { generateBasicMetadata, generateViewport } from '@/libs/seoConfig';
import Link from 'next/link';

export const metadata = generateBasicMetadata('faculties');
export const viewport = generateViewport();

export const revalidate = 0;

async function loadFaculties() {
    try {
        const result = await pool.query('SELECT * FROM faculties');
        return Array.isArray(result) ? result : [];
    } catch (error) {
        return [];
    }
}

export default async function FacultiesPage() {
    const faculties = await loadFaculties();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Encabezado con animación */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-10 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="animate-fade-in-up">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                Facultades UNP
                            </h1>
                            <div className="w-20 h-1 bg-white mx-auto rounded-full mb-6"></div>
                            <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
                                Explora las diferentes facultades de la Universidad Nacional de
                                Piura y conoce su información académica.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Barra de herramientas */}
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-6 bg-white shadow-sm rounded-lg -mt-6 mb-8 relative z-10 animate-fade-in">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-full mr-3">
                        <svg
                            className="w-5 h-5"
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
                    </div>
                    <span className="text-gray-700 font-medium">
                        {faculties.length === 0
                            ? 'No hay facultades'
                            : `${faculties.length} Facultade${faculties.length !== 1 ? 's' : ''}`}
                    </span>
                </div>

                <Link
                    href="/new"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
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

            {/* Contenido principal */}
            <div className="container mx-auto px-4 pb-16">
                {faculties.length > 0 ? (
                    <>
                        {/* Mensaje inspirador superior */}
                        <div className="text-center mb-10 animate-fade-in-up">
                            <h2 className="text-xl md:text-2xl font-medium text-gray-800">
                                Explora Nuestras Facultades
                            </h2>
                            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                                Cada facultad representa una comunidad académica dedicada a la
                                excelencia en educación e investigación
                            </p>
                        </div>

                        {/* Listado de tarjetas con animación */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                            {faculties.map((faculty, index) => (
                                <div
                                    key={faculty.id}
                                    className="animate-fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <FacultyCard faculty={faculty} />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
                        <div className="bg-blue-50 rounded-full p-5 mb-6">
                            <svg
                                className="w-16 h-16 text-blue-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">
                            No hay facultades registradas
                        </h3>
                        <p className="text-gray-500 mb-6 text-center max-w-lg">
                            ¡Comienza agregando la primera facultad para construir el directorio
                            académico de la universidad!
                        </p>
                        <Link
                            href="/new"
                            className="flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
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
                            <span>Crear Primera Facultad</span>
                        </Link>
                    </div>
                )}
            </div>

            {/* Sección de pie de página educativo (solo visible si hay facultades) */}
            {faculties.length > 0 && (
                <div className="bg-white border-t border-gray-100 py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-4">
                                Descubre el Conocimiento en la UNP
                            </h3>
                            <p className="text-gray-500 mb-8">
                                Las facultades representan el núcleo académico de nuestra
                                institución, donde estudiantes y profesores colaboran para impulsar
                                la investigación y el aprendizaje.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                            />
                                        </svg>
                                    </div>
                                    <span>Programas Académicos</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                            />
                                        </svg>
                                    </div>
                                    <span>Investigación</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </div>
                                    <span>Comunidad Académica</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
