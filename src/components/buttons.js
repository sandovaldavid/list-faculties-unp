"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Buttons({ facultyId }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  async function DeleteFaculty() {
    try {
      setIsDeleting(true);
      if (confirm("¿Estás seguro de eliminar esta facultad?")) {
        const res = await axios.delete(`/api/faculties/${facultyId}`);
        if (res.status === 204) {
          await router.push('/faculties');
          router.refresh();
        }
      }
    } catch (error) {
      console.error("Error deleting faculty:", error);
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
      <button
        className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white 
          bg-red-500 rounded-md shadow-sm transition duration-150 ease-in-out
          ${isDeleting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'}
        `}
        onClick={DeleteFaculty}
        disabled={isDeleting}
      >
        {isDeleting ? (
          <>
            <svg 
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Eliminando...
          </>
        ) : (
          <>
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Eliminar
          </>
        )}
      </button>

      <button
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white 
          bg-blue-500 rounded-md shadow-sm transition duration-150 ease-in-out
          hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => {
          router.push(`/faculties/edit/${facultyId}`);
          router.refresh();
        }}
      >
        <svg 
          className="w-4 h-4 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        Editar
      </button>
    </div>
  );
}

export default Buttons;
