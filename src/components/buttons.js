"use client";

function Buttons() {
  return (
    <div className="flex justify-end gap-x-2 mt-2">
      <button className=" text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded">
        Eliminar
      </button>
      <button className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded">
        Editar
      </button>
    </div>
  );
}

export default Buttons;