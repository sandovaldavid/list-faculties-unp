import axios from 'axios';
import FacultyCard from "@/components/facultyCard";

async function loadFaculties() {
  const {data} = await axios.get("http://localhost:3000/api/faculties")
  return data;
}

async function FacultiesPage() {
  const faculties = await loadFaculties();
  return (
    <div className="flex flex-wrap flex-row justify-around mt-8">
      {faculties.map(faculty => (
        <FacultyCard faculty={faculty} key={faculty.id}/>
      ))}
    </div>
  );
}

export default FacultiesPage;