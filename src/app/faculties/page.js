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
    <div className="flex flex-wrap flex-row justify-around mt-8">
      {faculties.length > 0 ? (
        faculties.map(faculty => (
          <FacultyCard faculty={faculty} key={faculty.id}/>
        ))
      ) : (
        <p className="bg-red-500 text-white py-1.5 px-2.5 rounded-2xl">No faculties found !!!</p>
      )}
    </div>
  );
}
