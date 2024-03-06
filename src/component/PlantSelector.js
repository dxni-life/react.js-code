
import React from 'react';
import plantData from './plantdata';

const PlantSelector = ({ onChange }) => (
  <select onChange={e => onChange(e.target.value)} defaultValue="">
    <option value="" disabled>
      Select a Plant
    </option>
    {plantData.map(plant => (
      <option key={plant.name} value={plant.name}>
        {plant.name}
      </option>
    ))}
  </select>
);

export default PlantSelector;
