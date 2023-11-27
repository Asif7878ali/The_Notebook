import React, { useState } from "react";

const Navbar = () => {
  const [search , setSearch] = useState('')
  return (
    <>
      <nav>
        <div className="h-14 space-x-8 w-full bg-yellow-200 flex">
          <div className="text-4xl font-bold pl-14 mt-2">
            <h1>NoteBook</h1>
          </div>

          <div className="mt-2">
            <input type="text" placeholder="Search Notes..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300"/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
