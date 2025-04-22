import FacultyCard from "@/components/facultyCard";
import {pool} from "@/libs/mysql";
import { generateBasicMetadata } from '@/libs/seoConfig';

export const metadata = generateBasicMetadata('faculties');

export const revalidate = 0;

async function loadFaculties() {
  try {
    const result = await pool.query("SELECT * FROM faculties");
    return Array.isArray(result) ? result : [];
  } catch (error) {
    console.error('Error loading faculties:', error);
    return [];
  }
}

export default async function FacultiesPage() {
  const faculties = await loadFaculties();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {faculties.length > 0 ? (
          faculties.map(faculty => (
            <FacultyCard faculty={faculty} key={faculty.id} />
          ))
        ) : (
          <div className="col-span-full text-center">
            <p className="inline-block bg-red-500 text-white py-2 px-4 rounded-lg">
              No faculties found!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
