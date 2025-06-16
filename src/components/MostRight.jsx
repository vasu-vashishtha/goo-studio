import React from 'react'
import { VscSettings } from "react-icons/vsc";
import { TfiGallery } from "react-icons/tfi";

const MostRight = () => {
  return (
    <>
        <div className='hidden md:flex flex-col gap-5 w-[50px] items-center p-6'>
          <div className="relative group">
            <VscSettings className='text-lg cursor-pointer' />
            <div className="absolute right-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 ">
              Run settings
            </div>
          </div>
          <div className="relative group">
            <TfiGallery className='text-lg cursor-pointer' />
            <div className="absolute right-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
              Prompt gallery
            </div>
          </div>
        </div>
    </>
  )
}

export default MostRight