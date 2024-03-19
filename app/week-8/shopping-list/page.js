"use client";
import React from 'react';
import { useUserAuth } from 'your-user-auth-module'; // Import the useUserAuth hook from your user authentication module
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  
const ShoppingListPage = () => {
  const { user } = useUserAuth(); // Use the useUserAuth hook to get the user object

  const handleItemSelect = (selectedItem) => {
    const itemName = selectedItem.name.split(",")[0].trim();
    const cleanName = itemName.replace(/[^a-zA-Z\s]+$/, "");
    setSelectedItemName(cleanName);
  };
   // Check if the user is logged in
   if (!user) {
    // If the user is not logged in, you can redirect them to the landing page or display an error message
    // For redirecting, you may need to use the useHistory hook from react-router-dom or any other routing library you're using
    // Example redirect using useHistory:
    // import { useHistory } from 'react-router-dom';
    // const history = useHistory();
    // history.push('/landing-page');
    return <p>You need to be logged in to access the shopping list.</p>;
  }

  // If the user is logged in, render the shopping list page
  return (
    <div>
      {/* Shopping list content goes here */}
      <h1>Shopping List</h1>
      {/* Add your shopping list components here */}
    </div>
  );
};

  return (
    <main className="bg-slate-950">
      <h1 className="text-3xl m-4 font-bold">Shopping List</h1>
      <div className="flex">
        <div className="flex-1 max-w-sm m-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-sm m-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
};
export default ShoppingListPage;



  