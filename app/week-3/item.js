import React from 'react';

const Item = ({ name, quantity, category }) => 
{
return(
<li className="bg-white shadow-md p-4 rounded-md mb-4">
      <div className="text-lg font-semibold mb-2">{name}</div>
      <div className="text-gray-600 mb-2">Quantity: {quantity}</div>
      <div className="text-gray-600">Category: {category}</div>
    </li>
);
};

export default Item;
import React from 'react';
import Item from'./Item';

const App = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ul>
        <Item name="Apples" quantity={5} category="Fruits" />
        <Item name="Milk" quantity={2} category="Dairy" />
        {/* Add more items here */}
      </ul>
    </div>
  );
};

export default App;

