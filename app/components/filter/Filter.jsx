"use client"
import { IoIosArrowDown } from "react-icons/io";

import { useState } from "react";
const MultiSelectCheckbox = ({ options, label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCheckboxChange = (option) => {
        setSelectedOptions((prevSelected) =>
            prevSelected.includes(option)
                ? prevSelected.filter((item) => item !== option)
                : [...prevSelected, option]
        );
    };

    return (
        <div className="relative inline-block w-full">
            <button
                onClick={toggleDropdown}
                className="w-full border border-gray-300 flex items-center justify-between bg-white p-2 rounded focus:outline-none focus:gray "
            >
                {selectedOptions.length > 0
                    ? selectedOptions.join(", ")
                    : label || "Select options"}
                    <IoIosArrowDown/>

            </button>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 border border-gray-300 bg-white rounded shadow-lg max-h-60 overflow-y-auto">
                    {options.map((option, index) => (
                        <label key={index} className="flex items-center p-2 hover:bg-gray-100">
                            <input
                                type="checkbox"
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiSelectCheckbox;
