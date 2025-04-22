import Image from 'next/image';
import Link from 'next/link';

function FacultyCard({ faculty }) {
  const defaultImage = '/images/default-faculty.jpg';
  
  return (
    <div className="group relative transition-all duration-300 bg-white rounded-xl shadow-sm hover:shadow-xl overflow-hidden border border-gray-100 hover:border-blue-200 flex flex-col h-full transform hover:-translate-y-2">
      {/* Improved overlay effect on hover with more gradient depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      
      <div className="relative h-52 w-full overflow-hidden">
        {faculty.path_img ? (
          <Image
            src={faculty.path_img}
            alt={faculty.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-blue-400">
            <svg 
              className="w-20 h-20 opacity-40" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1" 
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
        )}
        
        {/* Enhanced badge with subtle animation */}
        {faculty.id <= 3 && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-full z-20 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Destacada
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col relative z-20">
        {/* Added subtle indicator for the title */}
        <div className="flex items-center mb-2">
          <div className="w-8 h-1 bg-blue-500 rounded-full mr-2 opacity-70 group-hover:w-12 transition-all duration-300"></div>
          <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
            {faculty.name}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3 group-hover:text-gray-700">
          {faculty.description ? faculty.description : "Sin descripción disponible"}
        </p>
        
        <div className="flex justify-between items-center mt-2">
          <Link 
            href={`/faculties/${faculty.id}`}
            className="inline-flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300 group-hover:underline relative"
          >
            Ver detalles
            <svg 
              className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5l7 7-7 7"
              />
            </svg>
            {/* Added animated underline effect */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link 
            href={`/faculties/edit/${faculty.id}`}
            className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            aria-label="Editar facultad"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Enhanced footer with subtle animation */}
      <div className="px-6 py-3 bg-gray-50 text-xs text-gray-500 border-t border-gray-100 group-hover:bg-blue-50 transition-colors duration-300 relative z-20">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg 
              className="w-3 h-3 mr-1 text-blue-500 group-hover:animate-spin-slow" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span>ID: {faculty.id}</span>
          </div>
          <span className="inline-flex items-center">
            <svg 
              className="w-3 h-3 mr-1 text-blue-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Actualizada recientemente
          </span>
        </div>
      </div>
      
      {/* Enhanced action buttons with improved animation and accessibility */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <div className="flex space-x-3">
          <Link 
            href={`/faculties/${faculty.id}`} 
            className="px-4 py-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-50 transition-all duration-300 font-medium text-sm flex items-center transform hover:scale-105"
            aria-label="Ver detalles de facultad"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Detalles
          </Link>
          
          <Link 
            href={`/faculties/edit/${faculty.id}`} 
            className="px-4 py-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-50 transition-all duration-300 font-medium text-sm flex items-center transform hover:scale-105"
            aria-label="Editar facultad"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Editar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FacultyCard;