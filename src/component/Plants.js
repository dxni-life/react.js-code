import React, { useState } from 'react';
import PlantSelector from './PlantSelector';
import PlantInfo from './PlantInfo';
import plantData from './plantdata'; // Ensure this is correctly named to match the file
import './Plants.css';

const products = [
  { id: 1, name:'plant 1', image: '/assets/plant1.jpg'},
  { id: 2, name:'plant 2', image: '/assets/plant2.jpg'},
  { id: 3, name:'plant 3', image: '/assets/plant3.jpg'},
  { id: 4, name:'plant 4', image: '/assets/plant4.jpg'},
  { id: 5, name:'plant 5', image: '/assets/plant1.jpg'},
  { id: 6, name:'plant 6', image: '/assets/plant2.jpg'},
  { id: 7, name:'plant 7', image: '/assets/plant3.jpg'},
  { id: 8, name:'plant 8', image: '/assets/plant4.jpg'},
  { id: 9, name:'plant 9', image: '/assets/plant1.jpg'},
];

function Plant() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [expanded, setExpanded] = useState(null); // State to keep track of expanded card

  const handlePlantChange = (plantName) => {
    const plant = plantData.find(p => p.name === plantName);
    setSelectedPlant(plant); // Set the selected plant details
    setExpanded(null); // Reset any previously expanded card
  };

  const toggleExpansion = (plantId) => {
    // Close if the same card is clicked again, otherwise open the new one
    setExpanded(expanded === plantId ? null : plantId);
  };

  return (
    <div className="plant">
      <h1 style={{ textAlign: 'center' }}>Houseplants Care and Accessories</h1>
<p style={{ textAlign: 'center'}}>Discover essential care tips for your houseplants and explore a variety of accessories to enhance their growth and beauty. <br></br>Below, you'll find a comprehensive list of 29 indoor plants, including a special highlight on 9 of the most common varieties, designed to thrive in your home environment.</p>

    
      {/* Plant Selection */}
      <PlantSelector onChange={handlePlantChange} />

      {/* Display selected plant info if any */}
      {selectedPlant && (
        <PlantInfo plant={selectedPlant} />
      )}
     
      {/* Product Listing */}
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className={`product-card ${expanded === product.id ? 'expanded' : ''}`} onClick={() => toggleExpansion(product.id)}>
            <img
              src={product.image}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            {expanded === product.id && (
              <div className="product-details">
                {/* Fetch and display details from plantData by matching the product id */}
                <p><strong>Pot Size:</strong> {product.potSize}</p>
                <p><strong>Water Requirements:</strong> {product.waterRequirements}</p>
                <p><strong>Sunlight Exposure:</strong> {product.sunlightExposure}</p>
                <p><strong>Fact:</strong> {product.fact}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} LeafyLux - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Plant;