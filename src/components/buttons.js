"use client";
import axios from "axios"
import {useRouter} from "next/navigation"

function Buttons({facultyId}) {
  const router = useRouter();
  
  async function DeleteFaculty() {
    if (confirm("¿Estás seguro de eliminar esta facultad?")) {
      const res = await axios.delete("http://localhost:3000/api/faculties/" + facultyId)
      if (res.status === 204) {
        alert("Facultad eliminada correctamente");
        router.push("/faculties");
        router.refresh();
      }
    }
  }
  
  return (
    <div className="flex justify-end gap-x-2 mt-2">
      <button className=" text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
              onClick={DeleteFaculty}>
        Eliminar
      </button>
      <button className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded"
              onClick={() => {
                router.push("/faculties/edit/" + facultyId);
                router.refresh();
              }}>
        Editar
      </button>
    </div>
  );
}

export default Buttons;