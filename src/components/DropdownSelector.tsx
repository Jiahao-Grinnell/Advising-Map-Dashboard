import React from "react";
import "../styles/Dropdown.css";

interface Option {
  id: string;
}

interface DropdownProps {
  options: Option[];
  selectedOptions: any[];
  setSelectedOptions: (k: any) => void;

  toggl: () => void;
  addElem: (k: string) => void;
}

const Dropdown = ({
  options,
  selectedOptions,
  setSelectedOptions,
  toggl,
  addElem,
}: DropdownProps) => {
  const handleOptionChange = (value: string) => {
    addElem(value);
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      if (selectedOptions.length === 8) {
        alert("Cannot add more than 8 values at a time");
      } else setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div className="multi-select-container">
      <h3>Select Types of Advising:</h3>
      <select
        multiple
        value={selectedOptions}
        onChange={(e) => handleOptionChange(e.target.value)}
        className="options-dropdown"
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.id}
          </option>
        ))}
      </select>
      <div className="selected-options-container">
        <h4>Selected Categories:</h4>
        <ul className="selected-options-list">
          {selectedOptions.map((option) => (
            <li onClick={() => handleOptionChange(option)} key={option}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
