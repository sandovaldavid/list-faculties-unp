import axios from 'axios';

async function loadFaculties() {
  const {data} = await axios.get("http://localhost:3000/api/faculties")
  return data;
}

async function FacultiesPage() {
  const faculties = await loadFaculties();
  return (
    <div className="grid gap-4 grid-cols-4 ">
      {faculties.map(faculty => (
        <div key={faculty.id} className="bg-white rounded-lg border-gray-800 p-4">
          <h1 className="text-ls font-bold ">{faculty.name}</h1>
          <p>{faculty.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FacultiesPage;