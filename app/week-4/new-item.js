"use client";

import React, { useState } from "react";

const Newitem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("product");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name} Quantity: ${quantity} Catagory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("product");
  };
  const values = (e) => {
    if (e.target.value > 99) {
      alert("Please enter a number less than 100");
      setQuantity(99);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col gap-5"
      >
        <div className="border-gray-700 px-16 py-6 border-4 bg-black">
          <div className="py-1 px-1">
            <input
              type="text"
              placeholder="Name"
              className=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="py-1 px-1">
            <div className="">
              <input
                type="number"
                placeholder="Quantity"
                className=""
                value={quantity}
                onChange={(e) => setQuantity(e.target.value) || values(e)}
                max={99}
                required
              />
            </div>
            <div className="py-2">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className=""
              >
                <option value="category" disabled>
                  Category
                </option>
                <option value="product">Product</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozenfood">Frozen Food</option>
                <option value="cannedfood">Canned Food</option>
                <option value="drygoods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="px-1">
            <button type="submit" className="border-2 bg-blue-500 md:w-20 ">
              +
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Newitem;
