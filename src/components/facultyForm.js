"use client";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

function FacultyForm() {
  const [faculty, setFaculty] = useState({ name: '', description: '' });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [focused, setFocused] = useState({
    name: false,
    description: false,
  });
  const [imagePreviewHover, setImagePreviewHover] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef();
  const fileInputRef = useRef();
  const router = useRouter();
  const params = useParams();

  // Cargar datos de la facultad si estamos en modo edición
  useEffect(() => {
    if (params.idFaculty) {
      setLoading(true);
      axios.get(`/api/faculties/${params.idFaculty}`)
        .then((res) => {
          setFaculty({
            name: res.data.name,
            description: res.data.description,
          });
          if (res.data.path_img) {
            // Si tiene imagen, establecemos una bandera para mostrarla
            setExistingImage(res.data.path_img);
          }
        })
        .catch((error) => {
          console.error("Error fetching faculty:", error);
          setError(error.response?.data?.message || 'Error loading faculty');
        })
        .finally(() => setLoading(false));
    }
  }, [params.idFaculty]);

  const [existingImage, setExistingImage] = useState(null);

  const handleFocus = (field) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocused(prev => ({ ...prev, [field]: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaculty(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSubmitted(true);

    // Animar scroll al inicio del formulario en caso de error
    const scrollToTop = () => {
      window.scrollTo({
        top: formRef.current.offsetTop - 100,
        behavior: 'smooth'
      });
    };

    // Validate required fields
    if (!faculty.name?.trim()) {
      setError("Name is required");
      setLoading(false);
      scrollToTop();
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", faculty.name.trim());
      formData.append("description", faculty.description?.trim() || '');
      
      if (file) {
        // Validate file type and size
        if (!file.type.startsWith('image/')) {
          setError('Please upload an image file');
          setLoading(false);
          scrollToTop();
          return;
        }
        if (file.size > 5 * 1024 * 1024) { // 5MB limit
          setError('Image size should be less than 5MB');
          setLoading(false);
          scrollToTop();
          return;
        }
        formData.append("facultyImage", file);
      }

      let response;
      if (params.idFaculty) {
        response = await axios.put(`/api/faculties/${params.idFaculty}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
          validateStatus: function (status) {
            return status < 500;
          }
        });
      } else {
        response = await axios.post("/api/faculties", formData, {
          headers: { "Content-Type": "multipart/form-data" },
          validateStatus: function (status) {
            return status < 500;
          }
        });
      }

      if (response.status === 204 || response.status === 200 || response.status === 201) {
        router.push("/faculties");
        router.refresh();
      } else {
        throw new Error(response.data?.message || "Unexpected response status");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        err.response?.data?.message || 
        err.message || 
        "Error saving faculty. Please check your input and try again."
      );
      scrollToTop();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
        {/* Cabecera del formulario con efecto educativo */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div className="absolute top-0 right-0 w-24 h-24">
            <svg className="w-full h-full text-blue-500 opacity-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-1 flex items-center">
            {params.idFaculty ? (
              <><span className="mr-2">✏️</span> Editar Facultad</>
            ) : (
              <><span className="mr-2">✨</span> Crear Nueva Facultad</>
            )}
          </h2>
          <p className="text-blue-100 text-sm">
            {params.idFaculty
              ? "Actualiza la información de esta facultad"
              : "Completa el formulario para añadir una nueva facultad a la Universidad"}
          </p>
        </div>

        {/* Contenido del formulario */}
        <div className="p-6 md:p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 animate-pulse">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p>{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
            {/* Nombre de Facultad */}
            <div className="relative">
              <label 
                className={`absolute transition-all duration-300 ${
                  focused.name || faculty.name 
                    ? '-top-2.5 left-2 text-xs bg-white px-1 text-blue-600' 
                    : 'top-2 left-4 text-gray-500'
                }`}
              >
                Nombre de la Facultad *
              </label>
              <input
                type="text"
                name="name"
                value={faculty.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                required
                className={`w-full px-4 py-3 border ${
                  submitted && !faculty.name 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-gray-300 focus:border-blue-500'
                } rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-200 focus:outline-none`}
              />
              {submitted && !faculty.name && (
                <p className="text-red-500 text-xs mt-1 ml-2">Este campo es obligatorio</p>
              )}
            </div>

            {/* Descripción */}
            <div className="relative">
              <label 
                className={`absolute transition-all duration-300 ${
                  focused.description || faculty.description 
                    ? '-top-2.5 left-2 text-xs bg-white px-1 text-blue-600' 
                    : 'top-2 left-4 text-gray-500'
                }`}
              >
                Descripción
              </label>
              <textarea
                name="description"
                value={faculty.description}
                onChange={handleChange}
                onFocus={() => handleFocus('description')}
                onBlur={() => handleBlur('description')}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 focus:outline-none resize-y"
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                {faculty.description?.length || 0} caracteres
              </div>
            </div>

            {/* Selector de imagen con vista previa */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Imagen de la Facultad
                </span>
              </label>

              {/* Mostrar imagen existente si estamos en modo edición */}
              {existingImage && !file && (
                <div className="mb-4 relative">
                  <div 
                    className="relative h-48 w-full overflow-hidden rounded-lg border border-gray-200"
                    onMouseEnter={() => setImagePreviewHover(true)}
                    onMouseLeave={() => setImagePreviewHover(false)}
                  >
                    <Image
                      src={existingImage}
                      alt="Imagen actual"
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${imagePreviewHover ? 'opacity-100' : 'opacity-0'}`}>
                      <button
                        type="button"
                        onClick={() => setExistingImage(null)}
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 ml-1">Imagen actual de la facultad</p>
                </div>
              )}

              {/* Selector de archivo con diseño mejorado */}
              <div 
                onClick={triggerFileInput}
                className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 ${
                  file ? 'border-blue-300 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <div className="space-y-1 text-center">
                  {file ? (
                    <svg className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <div className="flex text-sm text-center justify-center">
                    <label
                      className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                    >
                      <span>{file ? 'Cambiar imagen' : 'Subir una imagen'}</span>
                      <input
                        ref={fileInputRef}
                        id="file-upload"
                        name="facultyImage"
                        type="file"
                        className="sr-only"
                        onChange={(e) => {
                          if (e.target.files[0]) {
                            setFile(e.target.files[0]);
                            setExistingImage(null);
                          }
                        }}
                        accept="image/*"
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">
                    {file 
                      ? `${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)` 
                      : 'PNG, JPG hasta 5MB'}
                  </p>
                </div>
              </div>

              {/* Vista previa de la imagen seleccionada */}
              {file && (
                <div className="mt-4 relative group">
                  <div className="relative h-48 w-full overflow-hidden rounded-lg border border-gray-200">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt="Vista previa"
                      fill
                      className="object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 ml-1">Vista previa de la imagen seleccionada</p>
                </div>
              )}
            </div>

            {/* Botones de acción */}
            <div className="flex items-center justify-end gap-4 pt-6">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition duration-300 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm
                  ${loading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow'}
                  focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 flex items-center`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    {params.idFaculty ? (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        Actualizar
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Crear
                      </>
                    )}
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FacultyForm;