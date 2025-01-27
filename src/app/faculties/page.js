import FacultyCard from "@/components/facultyCard";
import {pool} from "@/libs/mysql";

async function loadFaculties() {
  try {
    return await pool.query("SELECT * FROM faculties");
  } catch (error) {
    console.log("Se produjo un error al cargar las facultades.");
    console.error('Error loading faculties:', error);
    return [];
  }
}

export default async function FacultiesPage() {
  let faculties = await loadFaculties();
  if (!Array.isArray(faculties)) {
    faculties = [faculties];
  }
  
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
