import React from 'react';
import { GoPencil } from "react-icons/go";
import { CgNotes } from "react-icons/cg";
import { IoMdCode } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { MdOutlineRefresh } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import img1 from "../assets/img-1.png"
import img2 from "../assets/img-2.png"
import img3 from "../assets/img-3.png"
import img4 from "../assets/img-4.png"

const ChatSection = () => {
  return (
    <div className="flex-1 bg-[#212121] p-6 overflow-y-auto rounded-lg">
      <div className='flex justify-between items-center border-b-[1px] border-gray-500 py-2'>
        <div>
          <span className='flex justify-center items-center gap-2 font-semibold'>Chat prompt <GoPencil/></span>
        </div>
      <div className='flex justify-center items-center gap-6'>
        <div className="relative group">
          <CgNotes className="text-lg cursor-pointer" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
            System instruction
          </div>
        </div>

        <div className="relative group">
          <IoMdCode className="text-lg cursor-pointer" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
            Get SDK code to chat Gemini
          </div>
        </div>

        <div className="relative group">
          <CiShare2 className="text-lg cursor-pointer" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
            You need to create and run a prompt in order to share it
          </div>
        </div>

        <div className="relative group">
          <IoSaveOutline className="text-lg cursor-pointer" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
            No changes to save
          </div>
        </div>

        <div className="relative group">
          <MdCompareArrows className="text-lg cursor-pointer" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
            Compare code
          </div>
        </div>

        <div className="relative group">
          <MdOutlineRefresh className="text-lg cursor-pointer" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
            Clear chat
          </div>
        </div>

        <div className="relative group">
          <BsThreeDotsVertical className="text-lg cursor-pointer" />
        </div>
      </div>

      </div>

      <div className='min-h-auto flex flex-col gap-20'>
        <div>
          <span className='font-semibold text-2xl md:text-4xl flex justify-center items-center mt-10
          bg-gradient-to-r from-white via-sky-300 to-blue-600 bg-clip-text text-transparent'>Welcome to AI Studio</span>
        </div>

        <span className='bg-gray-700 px-2 py-2 flex justify-end items-center w-full md:w-[70%] mx-auto rounded-full gap-2'>
          <IoIosAddCircleOutline className='text-2xl'/>
          <span className='bg-gray-500 px-3.5 py-2 rounded-full'>Run Ctrl</span>
        </span>

        <div>
          <span className='text-start ml-18 text-gray-500'>What's new</span>

          <div className='w-full flex flex-wrap gap-4 justify-center items-center mt-3'>

            <div className='relative flex justify-center items-center gap-2 px-1 py-1 bg-gray-600 rounded-md'>
              <span className='absolute top-2 right-2 px-0.5 bg-blue-500 rounded-sm'>new</span>
              <div className='p-2 rounded-md'>
                <img src={img1} className='h-18 rounded-md'/>
              </div>
              <div className='flex flex-col p-2'>
                <span>Native Speech Generation</span>
                <span>Generate hign quality text to speech with<br/> Gemini</span>
              </div>
            </div>

            <div className='relative flex justify-center items-center gap-2 px-1 py-1 bg-gray-600 rounded-md'>
              <span className='absolute top-2 right-2 px-0.5 bg-blue-500 rounded-sm'>new</span>
              <div className=' p-2 rounded-md'>
                <img src={img2} className='h-18 rounded-md'/>
              </div>
              <div className='flex flex-col p-2'>
                <span>Native Speech Generation</span>
                <span>Generate hign quality text to speech with<br/> Gemini</span>
              </div>
            </div>

            <div className='relative flex justify-center items-center gap-2 px-1 py-1 bg-gray-600 rounded-md'>
              <span className='absolute top-2 right-2 px-0.5 bg-blue-500 rounded-sm'>new</span>
              <div className=' p-2 rounded-md'>
                <img src={img3} className='h-18'/>
              </div>
              <div className='flex flex-col p-2'>
                <span>Native Speech Generation</span>
                <span>Generate hign quality text to speech with<br/> Gemini</span>
              </div>
            </div>

            <div className='relative flex justify-center items-center gap-2 px-1 py-1 bg-gray-600 rounded-md'>
              <span className='absolute top-2 right-2 px-0.5 bg-blue-500 rounded-sm'>new</span>
              <div className=' p-2 rounded-md'>
                <img src={img4} className='h-18'/>
              </div>
              <div className='flex flex-col p-2'>
                <span>Native Speech Generation</span>
                <span>Generate hign quality text to speech with<br/> Gemini</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ChatSection;