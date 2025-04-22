"use client";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import BackButton from "@/components/BackButton";
import Buttons from "@/components/buttons";
import { SITE_URL, DEFAULT_OG_IMAGE, getCanonicalUrl } from "@/libs/seoConfig";

function FacultyPageClient({ params }) {
  const router = useRouter();
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const contentRef = useRef(null);
  
  // Construir URL canónica dinámica usando la función centralizada
  const canonicalUrl = getCanonicalUrl(`/faculties/${params.idFaculty}`);

  useEffect(() => {
    const loadFaculty = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/faculties/${params.idFaculty}`);
        if (response.status === 200 && response.data) {
          setFaculty(response.data);
        } else {
          throw new Error('Faculty not found');
        }
      } catch (error) {
        console.error('Error loading faculty:', error);
        setError('Error loading faculty data');
      } finally {
        setLoading(false);
      }
    };

    loadFaculty();
  }, [params.idFaculty]);

  // Efecto de scroll a la vista una vez cargado
  useEffect(() => {
    if (!loading && faculty && contentRef.current) {
      setTimeout(() => {
        contentRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      }, 300);
    }
  }, [loading, faculty]);

  // Determinar qué imagen usar para OG/Twitter
  const ogImage = faculty?.path_img || DEFAULT_OG_IMAGE;

  if (loading) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="relative w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-100 rounded-full animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full border-t-4 border-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
        </div>
        <p className="mt-4 text-lg text-gray-600 animate-pulse">Cargando información de la facultad...</p>
      </section>
    );
  }

  if (error || !faculty) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden p-6 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-red-100 p-3 rounded-full">
              <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Facultad no encontrada</h2>
          <p className="text-center text-gray-600 mb-6">
            No pudimos encontrar la información de la facultad solicitada. Por favor, intenta nuevamente.
          </p>
          
          <div className="flex flex-col space-y-3">
            <BackButton />
            <Link 
              href="/faculties" 
              className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Ver todas las facultades
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>{faculty.name} | Facultades UNP</title>
        <meta name="description" content={faculty.description || `Información detallada de la facultad ${faculty.name}`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${faculty.name} | Facultades UNP`} />
        <meta property="og:description" content={faculty.description || `Información detallada de la facultad ${faculty.name}`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={`Imagen de la facultad ${faculty.name}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${faculty.name} | Facultades UNP`} />
        <meta name="twitter:description" content={faculty.description || `Información detallada de la facultad ${faculty.name}`} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={`Imagen de la facultad ${faculty.name}`} />
      </Head>

      {/* Hero Section con imagen de fondo */}
      <section 
        className="relative min-h-[40vh] lg:min-h-[50vh] flex items-center bg-gradient-to-r from-blue-800 to-blue-900 overflow-hidden"
        ref={contentRef}
      >
        {/* Imagen de fondo con superposición */}
        {faculty?.path_img && (
          <div className="absolute inset-0 opacity-30">
            <Image
              src={faculty.path_img}
              alt={faculty.name}
              fill
              className={`object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setImageLoaded(true)}
              priority
            />
          </div>
        )}

        {/* Patrón gráfico educativo */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Contenido del Hero */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in-up">
            <div className="inline-block bg-blue-600 px-3 py-1 rounded-full text-xs mb-4 opacity-90">
              Universidad Nacional de Piura
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{faculty.name}</h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6 opacity-80"></div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explora la información detallada de esta facultad y descubre su oferta académica.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="min-w-full px-4 sm:px-6 lg:px-8 py-12 z-20 bg-gray-100">
        <div className="w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden animate-scale-in">
          <div className="flex flex-col lg:flex-row">
            {/* Columna de imagen */}
            <div className="w-full lg:w-2/5 relative">
              {faculty?.path_img ? (
                <div className="relative h-80 lg:h-full">
                  <Image
                    src={faculty.path_img}
                    alt={faculty.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-xs text-blue-800 font-medium">
                    Facultad UNP
                  </div>
                </div>
              ) : (
                <div className="relative h-80 lg:h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <svg 
                      className="w-24 h-24 text-blue-300"
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
                    <span className="mt-4 text-blue-500 text-sm">Sin imagen disponible</span>
                  </div>
                </div>
              )}
            </div>

            {/* Columna de contenido */}
            <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-10">
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-md mr-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Información de la Facultad
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4 mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Académica
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-600">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Activa
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Descripción
                    </h3>
                    <div className="mt-2 bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">
                        {faculty.description || "No hay descripción disponible para esta facultad. La descripción incluiría información sobre programas académicos, misión educativa, visión e historia."}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="text-lg font-medium text-gray-700 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Información Adicional
                    </h3>
                    
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-medium text-gray-500">Director/a</span>
                          <p className="text-sm font-medium text-gray-700">Información no disponible</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-medium text-gray-500">Fundación</span>
                          <p className="text-sm font-medium text-gray-700">Fecha no disponible</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="pt-6 border-t border-gray-100">
                  <Buttons facultyId={faculty.id}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botón volver con animación sutil */}
        <div className="flex justify-start max-w-5xl mx-auto mt-8 px-4 transition-transform duration-300 hover:-translate-x-1">
          <BackButton />
        </div>
      </section>
      
      {/* Sección de navegación relacionada */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">Explorar más recursos</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                href="/faculties" 
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-blue-100 rounded-full p-3 mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800 mb-1">Todas las Facultades</h4>
                <p className="text-sm text-gray-500">Explora el catálogo completo</p>
              </Link>
              
              <Link 
                href="/new" 
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-green-100 rounded-full p-3 mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800 mb-1">Crear Nueva Facultad</h4>
                <p className="text-sm text-gray-500">Añade una nueva entidad</p>
              </Link>
              
              <Link 
                href="/about" 
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-purple-100 rounded-full p-3 mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800 mb-1">Acerca de</h4>
                <p className="text-sm text-gray-500">Información del proyecto</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function FacultyPage({ params }) {
  return <FacultyPageClient params={params} />;
}