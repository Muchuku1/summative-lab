import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import ItemCard from "../Components/ItemCards";

function Shop({ coffeeItems = [], onDeleteCoffee, onLikeCoffee }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredCoffee = coffeeItems.filter((item) => {
    const matchesSearch = (item.name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation
      ? item.origin === selectedLocation
      : true;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="shop-layout">
      <Sidebar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
      <div className="grid-container">
        {filteredCoffee.map((item) => (
          <ItemCard
            key={item.id}
            coffee={item}
            onDeleteCoffee={onDeleteCoffee}
            onLikeCoffee={onLikeCoffee}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;