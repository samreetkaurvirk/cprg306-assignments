import React from "react";

const Item = ({ name, quantity, category, onSelect, onClick }) => {
  return (
    <li className="bg-gray-200 p-4 mb-4 rounded-md shadow-md" onClick={handleClick}>
      <h3 className="text-xl font-bold mb-2" onClick={handleSelect}>{name}</h3>
      <p className="text-gray-600 mb-1">Quantity: {quantity}</p>
      <p className="text-gray-600">Category: {category}</p>
    </li>
  );
};

export default Item;
