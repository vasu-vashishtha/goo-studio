import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ToggleBtn from './ToggleBtn'; 

const DropdownSection = ({ title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-sm text-gray-300 hover:text-white transition"
      >
        {title}
        {open ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </button>
      {open && (
        <div className="ml-2 space-y-2 pb-3">
          <ToggleBtn label="Structured output" />
          <ToggleBtn label="Code execution" />
          <ToggleBtn label="Function calling" initial={true} />
          <ToggleBtn label="Grounding with google search" />
          <ToggleBtn label="URL context" initial={true} />
        </div>
      )}
    </div>
  );
};

export default DropdownSection;
