
import React, { useState } from "react";

const Menu = ({data , setData}) => {
  const [showmodel, setShowModel] = useState(false);
  const [currentItem, setCurrentItem] = useState({ Title : "", Description : "" });
   const handleEdit =(items) =>{
        setCurrentItem(items)
        setShowModel(true)
   }
   
   const handleDelete =(id)=>{
           const deleledata = data.filter((items) => items.ID !== id)
                 setData(deleledata)
   }

   const changeTitile = (e) => {
         setCurrentItem({ ...currentItem, Title: e.target.value  })
   }
   const changeDesp = (e) => {
        setCurrentItem({ ...currentItem , Description : e.target.value })
   }
  
   const editSave=() =>{
       const updateData = data.map((items) => items.ID === currentItem.ID ? currentItem : items )
        setData(updateData)
            setShowModel(false)
   }
  return (
    <>
      <section className="h-[41rem] w-[21rem] bg-gray-200">
       
        {data.map((value) => (
          <div key={value.ID}>
            <div className="text-center font-bold text-2xl">
              <h1>{value.Title}</h1>
                <div className="mt-2 space-x-5">
              <button type="submit" onClick={() =>handleEdit(value) }
                className="text-white bg-gradient-to-r from-green-600 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Edit </button>
              <button type="submit" onClick={() => handleDelete(value.ID)}
                className="text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
           </div>
            </div>
          </div>
        ))}
      </section>
      {showmodel ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                
                <div className="items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <input className="resize-none h-[3rem] w-[45rem] p-4 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Title" value={currentItem.Title} onChange={changeTitile} ></input>
                <textarea className="resize-none h-[10rem] w-[45rem] p-4 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Notes Type here..." value={currentItem.Description} onChange={changeDesp} ></textarea>  
                </div>
               
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                 
                  <button type="button" onClick={() => editSave()}
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Save Changes</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Menu;
