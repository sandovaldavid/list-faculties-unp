import Link from 'next/link';
import Image from 'next/image';
import { generateBasicMetadata } from '@/libs/seoConfig';
import { pool } from '@/libs/mysql';
import University from '@/components/icons/University';
import FacultyCard from '@/components/facultyCard';

export const metadata = generateBasicMetadata('home');

// Función para cargar facultades destacadas
async function loadFeaturedFaculties() {
	try {
		const result = await pool.query('SELECT * FROM faculties LIMIT 3');
		return Array.isArray(result) ? result : [];
	} catch (error) {
		console.error('Error loading featured faculties:', error);
		return [];
	}
}

export default async function HomePage() {
	const featuredFaculties = await loadFeaturedFaculties();

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section mejorado con elementos decorativos y animaciones */}
			<section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-24 md:py-32 text-white overflow-hidden">
				{/* Elementos decorativos de fondo */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
					<div className="absolute top-1/4 -left-12 w-48 h-48 bg-blue-400 rounded-full opacity-10 blur-2xl"></div>
					<div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-white rounded-full opacity-10 blur-xl"></div>
				</div>
                
				{/* Patrón de fondo educativo */}
				<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="flex flex-col lg:flex-row items-center">
						<div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-10 animate-fade-in-up">
							<div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 bg-opacity-30 mb-6">
								Universidad Nacional de Piura
							</div>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
								Sistema de Gestión de
								<span className="text-blue-300"> Facultades UNP</span>
							</h1>
							<p className="text-xl mb-8 opacity-90 text-blue-100 max-w-2xl leading-relaxed">
								Plataforma integral para la administración académica. 
								Gestiona tus facultades de manera sencilla, moderna y eficiente.
							</p>
							<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
								<Link
									href="/faculties"
									className="group bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
									<span>Ver Facultades</span>
									<svg 
                                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
										<path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
									</svg>
								</Link>
								<Link
									href="/new"
									className="bg-blue-600 hover:bg-blue-500 border border-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
									<svg 
                                        className="w-5 h-5 mr-2" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
										<path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
									</svg>
									<span>Nueva Facultad</span>
								</Link>
							</div>
						</div>
						<div className="lg:w-1/2 flex justify-center">
							<div className="relative w-80 h-80 animate-float">
								<div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-full blur-xl"></div>
								<University />
							</div>
						</div>
					</div>
				</div>
                
                {/* Decoración de onda en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-16 md:h-20 fill-current text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                    </svg>
                </div>
			</section>

			{/* Sección de estadísticas con contador */}
			<section className="py-12 bg-white border-b border-gray-100">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
						<div className="text-center p-4">
							<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">14+</div>
							<p className="text-sm md:text-base text-gray-600">Facultades</p>
						</div>
						<div className="text-center p-4">
							<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">35+</div>
							<p className="text-sm md:text-base text-gray-600">Programas</p>
						</div>
						<div className="text-center p-4">
							<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1,000+</div>
							<p className="text-sm md:text-base text-gray-600">Estudiantes</p>
						</div>
						<div className="text-center p-4">
							<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">60+</div>
							<p className="text-sm md:text-base text-gray-600">Años de historia</p>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section mejorado con iconografía educativa */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Características Principales
						</h2>
						<div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Nuestro sistema ofrece herramientas completas para
							la gestión de información académica.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 lg:gap-12">
						{/* Feature 1 - Creación */}
						<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100 group">
							<div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
								<svg
									className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
								Creación de Facultades
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Registra nuevas facultades con toda su
								información relevante y carga imágenes
								representativas en un proceso simple y guiado.
							</p>
							<div className="mt-6 text-blue-600 font-medium inline-flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<span>Explorar función</span>
								<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
								</svg>
							</div>
						</div>

						{/* Feature 2 - Gestión */}
						<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100 group">
							<div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
								<svg
									className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
								Gestión de Datos
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Edita y actualiza la información de tus
								facultades en cualquier momento con nuestra
								interfaz intuitiva y herramientas de edición avanzadas.
							</p>
							<div className="mt-6 text-blue-600 font-medium inline-flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<span>Explorar función</span>
								<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
								</svg>
							</div>
						</div>

						{/* Feature 3 - Vista */}
						<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100 group">
							<div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
								<svg
									className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
								Vista Organizada
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Visualiza todas las facultades en un diseño
								moderno y responsive, optimizado para cualquier
								dispositivo y con filtros de búsqueda inteligentes.
							</p>
							<div className="mt-6 text-blue-600 font-medium inline-flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<span>Explorar función</span>
								<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Separador decorativo */}
			<div className="relative h-24 bg-white overflow-hidden">
                <svg className="absolute bottom-0 left-0 w-full h-24 -mb-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
                </svg>
			</div>

			{/* Featured Faculties mejorado con FacultyCard */}
			{featuredFaculties.length > 0 && (
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Facultades Destacadas
							</h2>
							<div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Descubre algunas de las facultades disponibles en
								nuestro sistema académico.
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-6 lg:gap-8">
							{featuredFaculties.map((faculty) => (
								<FacultyCard key={faculty.id} faculty={faculty} />
							))}
						</div>

						<div className="text-center mt-12">
							<Link
								href="/faculties"
								className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-600 bg-white hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md group">
								<span>Ver todas las facultades</span>
								<svg
									className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
								</svg>
							</Link>
						</div>
					</div>
				</section>
			)}

			{/* Nueva sección - Testimonios */}
			<section className="bg-white py-20 border-t border-gray-100">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Voces Académicas
						</h2>
						<div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Descubre lo que nuestra comunidad académica dice sobre el sistema.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
						<div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
							<div className="flex items-center mb-4">
								<div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
									D
								</div>
								<div className="ml-4">
									<h3 className="font-semibold text-gray-900">Dr. David Martínez</h3>
									<p className="text-sm text-gray-600">Director de Facultad de Ciencias</p>
								</div>
								<div className="ml-auto text-blue-500">
									<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
										<path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
									</svg>
								</div>
							</div>
							<p className="text-gray-700 italic leading-relaxed">
								&quot;Este sistema ha simplificado enormemente la gestión de información académica en nuestra facultad. La interfaz es intuitiva y nos permite mantener toda la información actualizada de manera eficiente.&quot;
							</p>
						</div>
                        
						<div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
							<div className="flex items-center mb-4">
								<div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
									M
								</div>
								<div className="ml-4">
									<h3 className="font-semibold text-gray-900">Mg. María López</h3>
									<p className="text-sm text-gray-600">Coordinadora Académica</p>
								</div>
								<div className="ml-auto text-blue-500">
									<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
										<path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
									</svg>
								</div>
							</div>
							<p className="text-gray-700 italic leading-relaxed">
								&quot;La capacidad de gestionar las facultades con esta plataforma ha mejorado la organización de nuestra universidad. Es una herramienta indispensable para la administración académica moderna.&quot;
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action mejorado */}
			<section className="relative bg-gradient-to-r from-blue-800 to-blue-600 py-20 overflow-hidden">
				{/* Elementos decorativos */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
					<div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
				</div>
                
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
						Comienza a gestionar tus facultades hoy
					</h2>
					<p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
						Sistema de Gestión de Facultades UNP - La plataforma
						integral para la Universidad Nacional de Piura.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link
							href="/new"
							className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl group">
							<span>Crear Nueva Facultad</span>
							<svg
								className="w-5 h-5 ml-2 transform group-hover:rotate-45 transition-transform duration-300"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 4v16m8-8H4"></path>
							</svg>
						</Link>
						<Link
							href="/faculties"
							className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-700 font-semibold py-4 px-8 rounded-lg transition duration-300 inline-flex items-center">
							<span>Explorar Facultades</span>
						</Link>
					</div>
				</div>
			</section>
            
			{/* Nueva sección - FAQ */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Preguntas Frecuentes
						</h2>
						<div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Resolvemos tus dudas sobre el sistema de gestión de facultades.
						</p>
					</div>

					<div className="max-w-3xl mx-auto space-y-6">
						<div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
							<h3 className="font-semibold text-lg text-gray-900 mb-2 flex items-center">
								<svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
								</svg>
								¿Cómo puedo crear una nueva facultad?
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Para crear una nueva facultad, haz clic en el botón &quot;Nueva Facultad&quot; en la barra de navegación o en la página principal. Completa el formulario con la información requerida y sube una imagen representativa si lo deseas.
							</p>
						</div>
                        
						<div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
							<h3 className="font-semibold text-lg text-gray-900 mb-2 flex items-center">
								<svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
								</svg>
								¿Puedo editar la información de una facultad existente?
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Sí, puedes editar cualquier facultad existente. Simplemente ve a la página de detalles de la facultad y haz clic en el botón &quot;Editar&quot;. Podrás modificar toda la información, incluyendo la imagen si es necesario.
							</p>
						</div>
                        
						<div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
							<h3 className="font-semibold text-lg text-gray-900 mb-2 flex items-center">
								<svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
								</svg>
								¿Qué tipo de imágenes puedo subir para las facultades?
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Puedes subir imágenes en formatos JPG, PNG o WebP. Recomendamos utilizar imágenes de alta calidad con resolución de al menos 1200x800 píxeles para una mejor visualización.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

// Estilos globales CSS inline para patrones y animaciones
const styles = `
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .bg-grid-pattern {
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  
  .animate-scale-in {
    animation: scaleIn 0.5s ease-out forwards;
  }
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

// Añadir estilos al documento
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}
