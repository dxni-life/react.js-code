// src/PlantInfo.js
import React from 'react';

const PlantInfo = ({ plant }) => (
  <div>
    {plant && (
      <>
        <h2>{plant.name}</h2>
        <img src={plant.imageUrl} alt={plant.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        <p><strong>Pot Size:</strong> {plant.potSize}</p>
        <p><strong>Water Requirements:</strong> {plant.waterRequirements}</p>
        <p><strong>Sunlight Exposure:</strong> {plant.sunlightExposure}</p>
        <p><strong>Fact:</strong> {plant.fact}</p>
      </>
    )}
  </div>
);

export default PlantInfo;
