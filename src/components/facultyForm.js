"use client";
import {useRef, useState, useEffect} from "react";
import axios from "axios";
import {useRouter, useParams} from "next/navigation"
import {toast, Toaster} from "sonner";

function facultyForm() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [faculty, setFaculty] = useState({
    name: '',
    description: '',
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const useForm = useRef();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams();
  const handleChange = (e) => {
    setFaculty({...faculty, [e.target.name]: e.target.value});
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (params.idFaculty) {
      axios.get("/api/faculties/" + params.idFaculty)
        .then((res) => {
          setFaculty({
            name: res.data.name,
            description: res.data.description,
          });
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
  }, []);
  
  function Notify() {
    toast.promise(() => {
      if (params.idFaculty === undefined) {
        return axios.post("/api/faculties", faculty);
      } else {
        return axios.put("/api/faculties/" + params.idFaculty, faculty);
      }
    }, {
      loading: 'Guardando...',
      success: 'Facultad guardada correctamente',
      error: 'Error al guardar la facultad',
    });
  }
  
  return (
    <form
      className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
      ref={useForm}
    >
      <label
        htmlFor="name"
        className="block text-gray-700 font-bold text-sm mb-2"
      >Nombre de la Facultad
      </label>
      <input
        value={faculty.name}
        autoFocus={true}
        className="shadow appearance-none border rounded w-full py-2 px-3"
        placeholder="Nombre de la Facultad"
        type="text" name="name" onChange={handleChange}
      />
      
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="description">
        Descripción
      </label>
      <textarea
        value={faculty.description}
        className="shadow appearance-none border rounded w-full py-2 px-3"
        rows="4" name="description" onChange={handleChange}>
      </textarea>
      
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit" onClick={(e) => {
        e.preventDefault();
        router.push("/faculties");
        router.refresh();
        Notify();
      }}>{params.idFaculty ? "Actualizar" : "Crear"}
      </button>
      <Toaster/>
    </form>
  )
    ;
}

export default facultyForm;