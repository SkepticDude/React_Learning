import React, { useState } from "react";

export default function TodoForm(props) {
  let [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addItem(newItem);
    setNewItem("");
  }

  return (
    <form className="new-itme-name" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
