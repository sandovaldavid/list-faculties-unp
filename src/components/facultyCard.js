import Link from "next/link";

function FacultyCard({faculty}) {
  return (
    <Link className="bg-white rounded-lg border-gray-800 p-4 hover:bg-gray-100 hover:cursor-pointer"
          href={`/faculties/${faculty.id}`}>
      {faculty.path_img &&
        <img className="w-full"
             src={faculty.path_img}
             alt={faculty.name}
             width={200}
             height={200}/>}
      <h1 className="text-ls font-bold ">{faculty.name}</h1>
      <p>{faculty.description}</p>
    </Link>
  )
}

export default FacultyCard;