import React from "react";

function ItemCard({ coffee, onDeleteCoffee, onLikeCoffee }) {
  const { id, name, description, origin, price, likes } = coffee;

  function handleLike() {
    fetch(`http://localhost:3000/coffee/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: (likes || 0) + 1 }),
    })
      .then((r) => r.json())
      .then((updated) => onLikeCoffee(updated));
  }

  function handleDelete() {
    fetch(`http://localhost:3000/coffee/${id}`, { method: "DELETE" }).then(() => {
      onDeleteCoffee(id);
    });
  }

  return (
    <div className="item-card">
      <div>
        <h3>{name || "Coffee Name"}</h3>
        <p>{description || "Description"}</p>
        <p><strong>{origin || "Origin"}</strong></p>
        <p>${price || "price"}</p>
      </div>

      <div className="card-actions">
        <button className="btn-like" onClick={handleLike}>
          likes {likes || 0}
        </button>
        <button className="btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;