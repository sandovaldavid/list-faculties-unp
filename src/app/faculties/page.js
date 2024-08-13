"use client"
import axios from 'axios';
import FacultyCard from "@/components/facultyCard";

async function loadFaculties() {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/faculties`);
    return data;
  } catch (error) {
    console.error('Error loading faculties:', error);
    return [];  // Retorna un array vacío si hay un error para evitar que la página falle
  }
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