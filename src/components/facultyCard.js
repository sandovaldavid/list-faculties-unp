import Image from "next/image";
import Link from "next/link";

function FacultyCard({ faculty }) {
  return (
    <Link
      className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition duration-300 overflow-hidden w-full"
      href={`/faculties/${faculty.id}`}
    >
      {/* Ribbon estilo académico en esquina superior */}
      <div className="absolute -right-12 top-6 rotate-45 bg-blue-600 text-white text-xs py-1 w-36 text-center z-10 shadow-sm">
        Facultad
      </div>

      {/* Contenedor de imagen con ratio fijo */}
      <div className="relative h-44 w-full overflow-hidden bg-gray-50">
        {faculty.path_img ? (
          <Image
            className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
            src={faculty.path_img}
            alt={faculty.name}
            width={400}
            height={200}
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center">
              <svg
                className="w-16 h-16 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
                  d="M12 14l9-5-9-5-9 5-9-5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"
                />
              </svg>
              <span className="text-xs text-gray-400 mt-2">Sin imagen</span>
            </div>
          </div>
        )}
      </div>

      {/* Contenido con bordes superiores curvos */}
      <div className="p-5 flex flex-col flex-grow bg-white relative">
        {/* Decoración de diseño minimalista */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-blue-600 rounded-r-full"></div>
        
        <h2 className="text-lg font-medium text-gray-800 mb-2 line-clamp-1 group-hover:text-blue-600 transition duration-300">
          {faculty.name}
        </h2>
        
        <div className="flex items-center mb-2 text-xs text-gray-500">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{new Date().getFullYear()} · UNP</span>
        </div>
        
        <p className="text-gray-600 text-sm flex-grow line-clamp-2 mb-4 text-wrap">
          {faculty.description || "Sin descripción disponible"}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
            Ver detalles
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
          
          {/* Indicador visual educativo */}
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FacultyCard;