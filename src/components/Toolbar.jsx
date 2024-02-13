import React from "react";

export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="filters">
      {filters.map((el, index) => (
        <div
          className={`filter${el === selected ? " filter__active" : ""}`}
          key={index}
          onClick={() => onSelectFilter(el)}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
