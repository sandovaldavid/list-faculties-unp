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
  const formRef = useRef();
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    if (params.idFaculty) {
      setLoading(true);
      axios.get(`/api/faculties/${params.idFaculty}`)
        .then((res) => {
          setFaculty({
            name: res.data.name,
            description: res.data.description,
          });
        })
        .catch((error) => setError(error.response?.data || 'Error loading faculty'))
        .finally(() => setLoading(false));
    }
  }, [params.idFaculty]);

  const handleChange = (e) => {
    setFaculty({ ...faculty, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("name", faculty.name);
      formData.append("description", faculty.description);
      if (file) {
        formData.append("facultyImage", file);
      }

      const config = {
        headers: { 
          "Content-Type": "multipart/form-data"
        }
      };

      if (params.idFaculty) {
        await axios.put(`/api/faculties/${params.idFaculty}`, formData, config);
      } else {
        await axios.post("/api/faculties", formData, config);
      }

      router.push("/faculties");
      router.refresh();
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err.response?.data?.message || "Error saving faculty");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {params.idFaculty ? "Edit Faculty" : "Create New Faculty"}
        </h2>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Faculty Name *
            </label>
            <input
              type="text"
              name="name"
              value={faculty.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter faculty name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={faculty.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
              placeholder="Enter faculty description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Faculty Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
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
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="facultyImage"
                      type="file"
                      className="sr-only"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
              </div>
            </div>
          </div>

          {file && (
            <div className="mt-4">
              <Image
                src={URL.createObjectURL(file)}
                alt="Preview"
                width={300}
                height={200}
                className="rounded-lg mx-auto object-cover"
              />
            </div>
          )}

          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md
                ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}
                transition duration-150 ease-in-out`}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : params.idFaculty ? 'Update Faculty' : 'Create Faculty'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FacultyForm;