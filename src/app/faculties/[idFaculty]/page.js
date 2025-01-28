import axios from "axios";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import Buttons from "@/components/buttons";

async function loadFacultyId(facultyId) {
  try {
    // In production with Vercel
    const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL 
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3000'
        : '';

    // Use direct API route for better reliability
    const response = await axios.get(`/api/faculties/${facultyId}`, {
      baseURL,
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    
    if (response.status === 200 && response.data) {
      return response.data;
    }

    throw new Error('Faculty not found');
  } catch (error) {
    console.error('Error loading faculty:', error);
    return null;
  }
}

async function FacultyPage({params}) {
  const faculty = await loadFacultyId(params.idFaculty);

  if (!faculty) {
    return (
      <section className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <p className="text-red-700">Faculty not found or error loading data</p>
        </div>
        <BackButton />
      </section>
    );
  }

  console.log('Faculty data:', faculty);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Container */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
            {faculty?.path_img ? (
              <Image
                src={faculty.path_img}
                alt={faculty.name || 'Faculty image'}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <svg 
                  className="w-24 h-24 text-gray-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Content Container */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {faculty.name}
                </h1>
                <div className="w-20 h-1 bg-blue-500 rounded"></div>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  Descripción
                </h2>
                <p className="text-gray-600 leading-relaxed text-wrap">
                  {faculty.description || "No hay descripción disponible"}
                </p>
              </div>

              <div className="mt-8">
                <Buttons facultyId={faculty.id}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton />
    </section>
  );
}

export default FacultyPage;