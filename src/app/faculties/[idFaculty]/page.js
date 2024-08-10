import axios from "axios";
import Buttons from "@/components/buttons";

async function loadFacultyId(facultyId) {
  try {
    const {data} = await axios.get("http://localhost:3000/api/faculties/" + facultyId)
    return data;
  } catch (error) {
    return error.response.data;
  }
}

async function FacultyPage({params}) {
  const faculty = await loadFacultyId(params.idFaculty);
  console.log(faculty);
  return (
    <section className="flex justify-center items-center">
      <div className="p-6 bg-white  w-1/3 rounded-3xl">
        <p>Name: {faculty.name}</p>
        <p>Name: {faculty.description}</p>
        <Buttons/>
      </div>
    </section>
  );
}

export default FacultyPage;