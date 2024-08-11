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
  return (
    <section className="flex justify-center items-center h-[calc(100vh-10rem)]">
      <div className="flex w-4/6 h-2/5 justify-center">
        <div className="p-6 bg-white  w-1/3">
          <h3 className="text-2xl font-bold mb-3">Name: {faculty.name}</h3>
          <p className="text-slate-800">Descripción: {faculty.description}</p>
          <Buttons facultyId={faculty.id}/>
        </div>
        <img className="w-1/3" src={faculty.path_img}/>
      </div>
    </section>
  );
}

export default FacultyPage;