import React from "react";
import './Dropdown.css';

interface DropdownProps {
  value: string;
  func: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ value, func }) => {
  return (
    <div className="dropdown_lang">
      <select
        value={value}
        onChange={func}
        className="dropdown"
      >
        <option value="ua">UA</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};
