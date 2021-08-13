// import React from "react";
import Item from "./Item";
import React, { useState } from "react";
import { findDOMNode } from "react-dom";

function ShoppingList({ items }) {
  // const [items, setItems] = useState(false)
  const [selectedCategory, setSelected] = useState("All")
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true
    } else {
      return item.category === selectedCategory
    }
  });

  function categoryHandler(e) {
    setSelected(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={categoryHandler}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
