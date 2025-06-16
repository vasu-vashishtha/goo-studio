import React, { useState } from 'react';
import { FaCheck, FaMinus } from 'react-icons/fa';

const ToggleBtn = ({ label = 'Toggle Option', initial = false }) => {
  const [enabled, setEnabled] = useState(initial);

  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-300">{label}</span>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative w-10 h-6 rounded-full transition-colors duration-300 
          ${enabled ? 'bg-blue-500' : 'bg-gray-600'}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs text-black transition-all duration-300
            ${enabled ? 'translate-x-4 bg-white' : 'translate-x-0 bg-gray-300'}`}
        >
          {enabled ? <FaCheck size={10} /> : <FaMinus size={10} />}
        </span>
      </button>
    </div>
  );
};

export default ToggleBtn;
