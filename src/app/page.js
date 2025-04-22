import Link from 'next/link';
import Image from 'next/image';
import { generateBasicMetadata } from '@/libs/seoConfig';
import { pool } from '@/libs/mysql';
import University from '@/components/icons/University';

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
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='bg-gradient-to-b from-blue-900 to-blue-700 py-20 text-white'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col md:flex-row items-center'>
						<div className='md:w-1/2 mb-10 md:mb-0 md:pr-10'>
							<h1 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
								Sistema de Gestión de Facultades UNP
							</h1>
							<p className='text-xl mb-8 opacity-90'>
								Plataforma integral para la administración
								académica de la Universidad Nacional de Piura.
								Gestiona tus facultades de manera sencilla y
								eficiente.
							</p>
							<div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
								<Link
									href='/faculties'
									className='bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300 text-center'>
									Ver Facultades
								</Link>
								<Link
									href='/new'
									className='bg-blue-600 hover:bg-blue-500 border border-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-center'>
									Nueva Facultad
								</Link>
							</div>
						</div>
						<div className='md:w-1/2 flex justify-center'>
							<div className='relative w-80 h-80'>
								<University />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold text-gray-900 mb-4'>
							Características Principales
						</h2>
						<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
							Nuestro sistema ofrece herramientas completas para
							la gestión de información académica.
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						{/* Feature 1 */}
						<div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300'>
							<div className='bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4'>
								<svg
									className='w-8 h-8 text-blue-600'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M12 6v6m0 0v6m0-6h6m-6 0H6'></path>
								</svg>
							</div>
							<h3 className='text-xl font-semibold mb-2 text-gray-900'>
								Creación de Facultades
							</h3>
							<p className='text-gray-600'>
								Registra nuevas facultades con toda su
								información relevante y carga imágenes
								representativas.
							</p>
						</div>

						{/* Feature 2 */}
						<div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300'>
							<div className='bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4'>
								<svg
									className='w-8 h-8 text-blue-600'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'></path>
								</svg>
							</div>
							<h3 className='text-xl font-semibold mb-2 text-gray-900'>
								Gestión de Datos
							</h3>
							<p className='text-gray-600'>
								Edita y actualiza la información de tus
								facultades en cualquier momento con nuestra
								interfaz intuitiva.
							</p>
						</div>

						{/* Feature 3 */}
						<div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300'>
							<div className='bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4'>
								<svg
									className='w-8 h-8 text-blue-600'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'></path>
								</svg>
							</div>
							<h3 className='text-xl font-semibold mb-2 text-gray-900'>
								Vista Organizada
							</h3>
							<p className='text-gray-600'>
								Visualiza todas las facultades en un diseño
								moderno y responsive, optimizado para cualquier
								dispositivo.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Faculties */}
			{featuredFaculties.length > 0 && (
				<section className='py-16 bg-white'>
					<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold text-gray-900 mb-4'>
								Facultades Destacadas
							</h2>
							<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
								Conoce algunas de las facultades disponibles en
								nuestro sistema.
							</p>
						</div>

						<div className='grid md:grid-cols-3 gap-8'>
							{featuredFaculties.map((faculty) => (
								<Link
									key={faculty.id}
									href={`/faculties/${faculty.id}`}
									className='bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300'>
									<div className='relative h-48 w-full'>
										{faculty.path_img ? (
											<Image
												src={faculty.path_img}
												alt={faculty.name}
												fill
												className='object-cover'
											/>
										) : (
											<div className='w-full h-full flex items-center justify-center bg-gray-200'>
												<svg
													className='w-16 h-16 text-gray-400'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'></path>
												</svg>
											</div>
										)}
									</div>
									<div className='p-6'>
										<h3 className='font-bold text-xl mb-2 text-gray-900'>
											{faculty.name}
										</h3>
										<p className='text-gray-600 line-clamp-2'>
											{faculty.description ||
												'No hay descripción disponible'}
										</p>
										<div className='mt-4 text-blue-600 font-medium flex items-center'>
											Ver más
											<svg
												className='w-4 h-4 ml-1'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M9 5l7 7-7 7'></path>
											</svg>
										</div>
									</div>
								</Link>
							))}
						</div>

						<div className='text-center mt-10'>
							<Link
								href='/faculties'
								className='inline-flex items-center px-6 py-3 border border-blue-500 text-blue-600 bg-white hover:bg-blue-50 rounded-lg font-medium transition duration-300'>
								Ver todas las facultades
								<svg
									className='w-5 h-5 ml-2'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M17 8l4 4m0 0l-4 4m4-4H3'></path>
								</svg>
							</Link>
						</div>
					</div>
				</section>
			)}

			{/* Call to Action */}
			<section className='bg-blue-700 py-16 text-white'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl font-bold mb-6'>
						Comienza a gestionar tus facultades hoy
					</h2>
					<p className='text-xl mb-8 max-w-2xl mx-auto opacity-90'>
						Sistema de Gestión de Facultades UNP - La plataforma
						integral para la Universidad Nacional de Piura.
					</p>
					<Link
						href='/new'
						className='bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center'>
						Crear Nueva Facultad
						<svg
							className='w-5 h-5 ml-2'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M12 4v16m8-8H4'></path>
						</svg>
					</Link>
				</div>
			</section>
		</div>
	);
}
