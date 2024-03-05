'use client';
import React, { useState, useEffect } from "react";
import ItemList from './item-list';
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const data = require('./items.json');
      setItems(data);
    } catch (error) {
      console.error('Error loading JSON:', error);
    }
  }, []);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: '#006400' }}>
      <a href='/Home' style={{ color: 'blue', marginBottom: '20px', alignSelf: 'flex-start', marginLeft: '10px' }}>
        Home
      </a>
      <div style={{ padding: '20px', borderRadius: '10px', width: '100%', marginBottom: '20px', boxSizing: 'border-box' }}>
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div style={{ padding: '20px', borderRadius: '10px', width: '100%', boxSizing: 'border-box' }}>
        <ItemList items={items} />
      </div>
    </div>
  );
  }  