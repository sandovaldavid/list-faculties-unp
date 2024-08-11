import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-zinc-800 px-20 text-white w-full py-5">
      <div className="container mex-auto flex justify-between items-center">
        <Link href={"/"}>
          <h3 className=" text-3xl mb-5">Facultades UNP</h3>
        </Link>
        <ul>
          <li>
            <Link
              href="/new"
              className="bg-blue-500 hover:bg-blue-700 p-3 rounded-3xl">Crear Facultad</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;