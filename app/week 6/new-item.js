import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setError('Please enter a name');
      return;
    }

    setError('');

    const newItem = { name, quantity, category };
    onAddItem(newItem); 
    
    console.log('Item:', newItem);

    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  const handleQuantityChange = (e) => {
    const newQuantity = Math.min(99, Math.max(1, parseInt(e.target.value, 10)));
    setQuantity(newQuantity);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ color: 'black', backgroundColor: 'gray', borderRadius: '5px' }}
        />
      </label>
      <br />
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          style={{ color: 'black', backgroundColor: 'gray', borderRadius: '5px' }}
        />
      </label>
      <br />
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ color: 'black', backgroundColor: 'gray', borderRadius: '5px' }}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <br />
      {error && <p style={{ color: 'darkred', fontSize: 25}}>{error}</p>}
      <button
        onClick={handleSubmit}
        style={{
          border: '4px solid lightgreen',
          borderRadius: '5px',
          padding: '5px 10px',
          cursor: 'pointer',
          backgroundColor: 'darkolivegreen',
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default NewItem;
