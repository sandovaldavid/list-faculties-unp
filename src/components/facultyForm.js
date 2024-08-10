"use client";
import {useRef, useState} from "react";
import axios from "axios";

function facultyForm() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [faculty, setFaculty] = useState({
    name: '',
    description: '',
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const useForm = useRef();
  const handleChange = (e) => {
    setFaculty({...faculty, [e.target.name]: e.target.value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/faculties", faculty)
    console.log(res);
    useForm.current.reset();
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
        className="shadow appearance-none border rounded w-full py-2 px-3"
        rows="4" name="description" onChange={handleChange}>
      </textarea>
      
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit" onClick={handleSubmit}>Guardar
      </button>
    </form>
  );
}

export default facultyForm;