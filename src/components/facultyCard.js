import Image from "next/image";
import Link from "next/link";

function FacultyCard({ faculty }) {
  return (
    <Link
      className="group flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 overflow-hidden w-full sm:w-86 mb-8"
      href={`/faculties/${faculty.id}`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        {faculty.path_img ? (
          <Image
            className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
            src={faculty.path_img}
            alt={faculty.name}
            width={400}
            height={200}
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <svg
              className="w-20 h-20 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition duration-300">
          {faculty.name}
        </h2>
        <p className="text-gray-600 text-sm flex-grow line-clamp-2 mb-4 text-wrap">
          {faculty.description || "No description available"}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="inline-flex items-center text-sm text-blue-600 group-hover:text-blue-700">
            Learn more
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default FacultyCard;