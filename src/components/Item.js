import React, { useState } from "react";
import items from "../data/items";

function Item({ name, category, addItem }) {
  const [className, setClass] = useState("")

  return (
    <li className={className ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setClass(!className)}>Add to Cart
        {/* {className ? "In-Cart" : ""} */}
      </button>
    </li>
  );
}

export default Item;
