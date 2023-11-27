import React, { useState } from "react";
import Menu from "./Menu";


const Addnotes = () => {
   const [title, setTitle] = useState('')
   const [desp, setDesp] = useState('')
   const [notes, setNotes] = useState([])

   const addNotes = ()=>{
        const id = new Date().getTime()
        const newNotes = {
          ID : id,
          Title : title,
          Description : desp
        }
    setNotes([...notes , newNotes])
    console.log(notes)
    setTitle('')
    setDesp('')
  }

  return (
    <>
    <Menu data={notes} setData={setNotes} />
      <div className="ml-20 mt-10">
      <input className="resize-none h-[3rem] w-[60rem] p-4 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Title" value={title} 
      onChange={(e) => setTitle (e.target.value)} ></input>
        <textarea className="resize-none h-[30rem] w-[60rem] p-4 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Notes Type here..." value={desp}
         onChange={(e) => setDesp (e.target.value)}  ></textarea>
        <div className="space-x-4">
          <button type="submit" onClick={addNotes}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Save </button>
          
        </div>
      </div>
    </>
  );
};

export default Addnotes;
