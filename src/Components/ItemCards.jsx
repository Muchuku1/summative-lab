import React from "react";

function ItemCard({ toy, onDeleteToy, onLikeToy }) {
  const { id, name, description, origin, price, likes } = toy;

  function handleLike() {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: (likes || 0) + 1 }),
    })
      .then((r) => r.json())
      .then((updated) => onLikeToy(updated));
  }

  function handleDelete() {
    fetch(`http://localhost:3000/toys/${id}`, { method: "DELETE" }).then(() => {
      onDeleteToy(id);
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