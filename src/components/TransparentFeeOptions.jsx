import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const TransparentFeeOption = () => {
  const [active, setActive] = useState(null);

  const toggleAccordion = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="font-sans p-6 text-center">
      <h1 className="text-xl font-bold mb-1">Transparent Fee Options</h1>
      <p className="text-sm text-gray-600 mb-4">Transparent pricing with value-packed course option</p>

      <div className="flex flex-col gap-4 items-center">
        {/* Regular Program */}
        <div className={`w-full rounded-lg overflow-hidden border-2 transition-all ${active === 1 ? 'border-purple-500' : 'border-purple-200'}`}>
          <div
            className="cursor-pointer p-3 text-sm font-bold text-purple-800 bg-purple-100 flex justify-between items-center"
            onClick={() => toggleAccordion(1)}
          >
            <span className="text-sm font-bold">Regular Program</span>
            <FaChevronDown className={`transition-transform duration-300 ${active === 1 ? 'rotate-180' : ''}`} />
          </div>
          {active === 1 && (
            <div className="p-3 bg-white border-t border-purple-200 text-xs text-gray-700 text-left">
              Our Regular Program offers in-depth guidance over a flexible schedule. Perfect for learners who want to take their time and fully grasp each concept.
            </div>
          )}
        </div>

        {/* Fast Track Program */}
        <div className={`w-full rounded-lg overflow-hidden border-2 transition-all ${active === 2 ? 'border-blue-600' : 'border-blue-200'}`}>
          <div
            className="cursor-pointer p-3 text-sm font-bold text-blue-900 bg-blue-100 flex justify-between items-center"
            onClick={() => toggleAccordion(2)}
          >
            <span className="text-sm font-bold">Fast Track Program</span>
            <FaChevronDown className={`transition-transform duration-300 ${active === 2 ? 'rotate-180' : ''}`} />
          </div>
          {active === 2 && (
            <div className="p-3 bg-white border-t border-blue-200 text-xs text-gray-700 text-left">
              The Fast Track Program is ideal for those who want to accelerate their learning and achieve their goals in a shorter time with intensive mentoring.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransparentFeeOption;
