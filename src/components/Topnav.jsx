// import React from 'react';
// import { FaKey, FaCog } from "react-icons/fa";
// import { GrDocumentTransfer } from "react-icons/gr";

// const Topnav = () => {
//   return (
//     <div className="flex items-center justify-end gap-5 px-4 py-4 bg-[#111111]">
//       <div className=" relative group text-sm text-gray-300">
//         <button className="flex justify-center items-center gap-2 cursor-pointer bg-gray-700 px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-600"><FaKey/>Get API key</button>
//           <div className="absolute top-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
//             Generate API Key
//           </div>
//       </div>
//       <div className="flex items-center gap-6 text-sm text-gray-400">
//         <span className="hover:text-white cursor-pointer font-bold">Studio</span>
//         <span className="hover:text-white cursor-pointer">Dashboard</span>
//         <span className="hover:text-white cursor-pointer flex items-center justify-center gap-1">Documentation <GrDocumentTransfer/></span>
//         <span><FaCog className='text-lg'/></span>
//         <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
//           V
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topnav;

import React, { useState } from 'react';
import { FaKey, FaCog, FaBars, FaTimes } from "react-icons/fa";
import { GrDocumentTransfer } from "react-icons/gr";

const Topnav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-[#111111] px-4 py-4 flex items-center justify-between text-sm text-gray-300">
      
      {/* Left: Hamburger on mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Right: Main section */}
      <div className="flex items-center gap-5 ml-auto">
        {/* API Key Button */}
        <div className="relative group">
          <button className="flex justify-center items-center gap-2 cursor-pointer bg-gray-700 px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-600">
            <FaKey /> Get API key
          </button>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
            Generate API Key
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <span className="hover:text-white cursor-pointer font-bold">Studio</span>
          <span className="hover:text-white cursor-pointer">Dashboard</span>
          <span className="hover:text-white cursor-pointer flex items-center gap-1">
            Documentation <GrDocumentTransfer />
          </span>
        </div>

        {/* Icons */}
        <div className="relative group">
          <span><FaCog className="text-lg cursor-pointer" /></span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
            Open settings menu
          </div>
        </div>
        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
          V
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a1a1a] text-white py-3 px-5 flex flex-col gap-3 md:hidden z-50">
          <span className="hover:text-blue-400 cursor-pointer font-bold">Studio</span>
          <span className="hover:text-blue-400 cursor-pointer">Dashboard</span>
          <span className="hover:text-blue-400 cursor-pointer flex items-center gap-1">
            Documentation <GrDocumentTransfer />
          </span>
        </div>
      )}
    </div>
  );
};

export default Topnav;

