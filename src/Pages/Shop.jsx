import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import ItemCard from "../Components/ItemCards";

function Shop({ toys, onDeleteToy, onLikeToy }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredToys = toys.filter((toy) => {
    const matchesSearch = (toy.name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation
      ? toy.origin === selectedLocation
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
        {filteredToys.map((toy) => (
          <ItemCard
            key={toy.id}
            toy={toy}
            onDeleteToy={onDeleteToy}
            onLikeToy={onLikeToy}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;