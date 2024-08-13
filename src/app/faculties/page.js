import FacultyCard from "@/components/facultyCard";
import { pool } from "@/libs/mysql";

async function loadFaculties() {
  try {
    console.log("Intentando conectar a la base de datos...");
    const [rows] = await pool.query("SELECT * FROM faculties");
    console.log("Datos recibidos:", rows);
    return rows;
  } catch (error) {
    console.error('Error loading faculties:', error);
    return [];  // Retorna un array vacío si hay un error para evitar que la página falle
  }
}

export default async function FacultiesPage() {
  const faculties = await loadFaculties();
  console.log("Facultades cargadas:", faculties);
  return (
    <div className="flex flex-wrap flex-row justify-around mt-8">
      {faculties.length > 0 ? (
        faculties.map(faculty => (
          <FacultyCard faculty={faculty} key={faculty.id} />
        ))
      ) : (
        <p>No faculties found.</p>
      )}
    </div>
  );
}