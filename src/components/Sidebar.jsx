import React, { useState, useEffect } from 'react';
import {
  FaCommentDots,
  FaVideo,
  FaPhotoVideo,
  FaCogs,
  FaHistory,
  FaSave,
  FaAngleDoubleLeft,
  FaAngleDoubleRight
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Collapse sidebar by default on small screens
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768); // open only on md+
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItem = (icon, label) => (
    <div
      className="hidden md:flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer relative group"
      title={!isOpen ? label : ''}
    >
      <span className="text-lg">{icon}</span>
      {isOpen && <span>{label}</span>}
      {/* Tooltip on collapsed */}
      {!isOpen && (
        <span className="absolute left-full ml-2 bg-black text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition">
          {label}
        </span>
      )}
    </div>
  );

  return (
    <div className={`hidden md:flex relative bg-[#111111] p-4 flex-col ${isOpen ? 'w-60' : 'w-16'} transition-all duration-300`}>
      {isOpen && <h1 className="text-xl font-semibold mb-6 
      bg-gradient-to-r from-white via-sky-300 to-blue-600 bg-clip-text text-transparent
      ">Google AI Studio</h1>}

      <div className="flex flex-col gap-4 text-sm text-gray-300">
        {navItem(<FaCommentDots />, 'Chat')}
        {navItem(<FaVideo />, 'Stream')}
        {navItem(<FaPhotoVideo />, 'Generate Media')}
        {navItem(<FaCogs />, 'Build')}
        {navItem(<FaHistory />, 'History')}
        {navItem(<FaSave />, 'Enable saving')}
      </div>

      {isOpen && (
        <p className="mt-auto text-xs text-gray-500 pt-6">
          This model is not stable and may not be suitable for production use.{' '}
          <a href="#" className="text-blue-400 underline">Learn more</a>.
        </p>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute bottom-4 -right-2 text-gray-400 bg-[#212121] hover:text-white p-2 rounded-full cursor-pointer"
      >
        {isOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </button>
    </div>
  );
};

export default Sidebar;
