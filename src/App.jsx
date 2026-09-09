import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import AdminPortal from "./Pages/AdminPortal";

function App() {
  const [coffeeItems, setCoffeeItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/coffee")
      .then((r) => r.json())
      .then((data) => setCoffeeItems(data))
      .catch((err) => console.error("Error fetching coffee items:", err));
  }, []);

  function handleAddCoffee(newCoffee) {
    setCoffeeItems((prev) => [...prev, newCoffee]);
  }

  function handleDeleteCoffee(id) {
    setCoffeeItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleLikeCoffee(updatedCoffee) {
    setCoffeeItems((prev) =>
      prev.map((item) => (item.id === updatedCoffee.id ? updatedCoffee : item))
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              coffeeItems={coffeeItems}
              onDeleteCoffee={handleDeleteCoffee}
              onLikeCoffee={handleLikeCoffee}
            />
          }
        />
        <Route
          path="/admin"
          element={<AdminPortal onAddCoffee={handleAddCoffee} />}
        />
      </Routes>
    </Router>
  );
}

export default App;