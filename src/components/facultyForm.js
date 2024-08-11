"use client";
import {useRef, useState, useEffect} from "react";
import axios from "axios";
import {useRouter, useParams} from "next/navigation"
import Image from "next/image";

function facultyForm() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [faculty, setFaculty] = useState({
    name: '',
    description: '',
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [file, setFile] = useState(null);
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
          return error.response.data;
        });
    }
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", faculty.name);
    formData.append("description", faculty.description);
    if (file) {
      formData.append("facultyImage", file);
    }
    if (params.idFaculty === undefined) {
      const res = await axios.post("/api/faculties", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } else {
      const res = await axios.put("/api/faculties/" + params.idFaculty, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
    router.push("/faculties");
    router.refresh();
    
  }
  
  return (
    <div className="flex justify-center flex-wrap flex-col w-1/3 min-w-80">
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
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="facultyImage">
          Imagen del Producto
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-3"
          type="file" name="facultyImage" onChange={(e) => {
          setFile(e.target.files[0]);
        }}/>
        {file && <Image
          className="w-96 object-contain mx-auto my-4"
          src={URL.createObjectURL(file)} width={500} height={400} alt="IMG_Faculty"/>}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
          type="submit" onClick={handleSubmit}>{params.idFaculty ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  )
    ;
}

export default facultyForm;