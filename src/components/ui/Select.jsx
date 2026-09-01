import React, { useState, useRef, useEffect } from 'react';

const Select = ({ name, value, onChange, options, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue, type: 'select' } });
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value);
  const displayText = selectedOption ? selectedOption.label : 'Выберите...';

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        type="button" 
        onClick={() => setIsOpen(!isOpen)} 
        className={`${className} flex items-center justify-between w-full hover:border-indigo-500 hover:shadow-[0_0_0_1px_rgba(99,102,241,0.4),0_0_12px_rgba(99,102,241,0.25)]`}
      >
        <span>{displayText}</span>
        <svg 
          className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-neutral-900 border border-neutral-700 rounded-xl shadow-xl overflow-hidden">
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <div key={option.value} className={`mx-1 my-1 p-[2px] rounded-xl transition-all duration-200 ${isSelected ? 'bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500' : 'bg-transparent hover:bg-gradient-to-r hover:from-indigo-500/50 hover:via-fuchsia-500/50 hover:to-pink-500/50'}`}>
                <button
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                    isSelected 
                      ? 'bg-neutral-900 text-white' 
                      : 'bg-transparent text-neutral-300 hover:text-white hover:bg-neutral-800/80'
                  }`}
                >
                  {option.label}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
