import Link from "next/link";

function FacultyCard({faculty}) {
  return (
    <Link className="bg-white rounded-lg border-gray-800 p-4 hover:bg-gray-100 hover:cursor-pointer"
          href={`/faculties/${faculty.id}`}>
      <h1 className="text-ls font-bold ">{faculty.name}</h1>
      <p>{faculty.description}</p>
    </Link>
  )
}

export default FacultyCard;