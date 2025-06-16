import React from 'react';
import { FaChevronDown, FaEdit } from 'react-icons/fa'
import { MdLockReset } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import ToggleBtn from './ToggleBtn';
import DropdownSection from './DropdownSection';

const RunSettings = () => {
  return (
    <div className="hidden md:block w-80 bg-[#212121] p-4 overflow-y-auto ml-1 rounded-lg">
      <span className="text-sm font-medium text-gray-300 mb-2 flex justify-between items-center">Run settings 
        <span className='flex gap-2'>
            <span className="relative group">
            <MdLockReset className='text-xl cursor-pointer' />
            <div className="absolute top-full left-1/4 -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
              Reset default settings
            </div>
          </span>
          <IoMdClose className='text-xl'/>
        </span>
      </span>

      <div className="mb-4">
        <div className="bg-[#1e1e1e] p-2 rounded text-sm text-gray-300 flex items-center justify-between">
          Gemini 2.5 Pro Preview <FaChevronDown className="text-xs" />
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <label className="text-xs text-gray-400">Token count</label>
        <div className="text-sm text-gray-300">0 / 1,048,576</div>
      </div>

      <div className="mb-4 ">
        <label className="text-xs text-gray-400">Temperature</label>
        <input type="range" min="0" max="1" step="0.01" defaultValue="1" className="w-full" />
      </div>

      <div className="mb-4 ">
        <ToggleBtn label="Thinking mode" initial={true} />
        <ToggleBtn label="Set thinking budget" />
      </div>

      <div className="mb-4 ">
        <DropdownSection title="Tools" />
      </div>

      <div className="mb-4 ">
        <DropdownSection title="Advanced Settings" />
      </div>

    </div>
  );
};

export default RunSettings;