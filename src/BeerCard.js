// src/BeerCard.js
import React from 'react';
import './BeerCard.css';

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      <p>
        <strong>ABV:</strong> {beer.abv}% | <strong>IBU:</strong> {beer.ibu}
      </p>
      <p>
        <strong>First Brewed:</strong> {beer.first_brewed}
      </p>
      <p>{beer.description}</p>
      <div className="food-pairing">
        <p>
          <strong>Food Pairing:</strong>
        </p>
        <ul>
          {beer.food_pairing.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeerCard;
