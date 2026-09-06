import React, { useState } from "react";

function AdminPortal({ onAddToy }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    origin: "",
    price: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, likes: 0 }),
    })
      .then((r) => r.json())
      .then((newToy) => {
        onAddToy(newToy);
        setFormData({ name: "", description: "", origin: "", price: "" });
      });
  }

  return (
    <div className="admin-container">
      <h2>Add New Item to Inventory</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Item Name" value={formData.name} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input name="origin" placeholder="Origin / Location" value={formData.origin} onChange={handleChange} required />
        <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <button type="submit">Create Item</button>
      </form>
    </div>
  );
}

export default AdminPortal;