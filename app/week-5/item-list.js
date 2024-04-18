"use client";
import { useState } from "react";
import Item from "./item";
import Items from "./items.json";


export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");

    Items.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
          return (
            <main>
              <button onClick={() => setSortBy("name")} className="bg-blue-500 hover:bg-blue-700 focus:bg-violet-700 text-white font-bold p-4 m-2 w-28">
                Name
              </button>
              <button onClick={() => setSortBy("category")} className="bg-blue-500 hover:bg-blue-700 focus:bg-violet-700 text-white font-bold p-4 m-2 w-28">
                Category
              </button>
              <ul>
                {Items.map((item) => (
                  <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
              </ul>
            </main>
          )
}
