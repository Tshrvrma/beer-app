import React from 'react';
const BeerDetail = ({ beer }) => {
  return (
    <div className="beer-detail">
      <h2>{beer.name}</h2>
      <img src={beer.image_url} alt={beer.name} />
      <p>{beer.description}</p>
      <p>ABV: {beer.abv}%</p>
      <p>IBU: {beer.ibu}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <h3>Ingredients:</h3>
      <p>Malt:</p>
      <ul>
        {beer.ingredients.malt.map((malt) => (
          <li key={malt.name}>
            {malt.name}: {malt.amount.value} {malt.amount.unit}
          </li>
        ))}
      </ul>
      <p>Hops:</p>
      <ul>
        {beer.ingredients.hops.map((hop) => (
          <li key={hop.name}>
            {hop.name}: {hop.amount.value} {hop.amount.unit} - {hop.add} ({hop.attribute})
          </li>
        ))}
      </ul>
      <p>Yeast: {beer.ingredients.yeast}</p>
      <h3>Method:</h3>
      <p>Mash Temperature: {beer.method.mash_temp[0].temp.value} °C for {beer.method.mash_temp[0].duration} minutes</p>
      <p>Fermentation Temperature: {beer.method.fermentation.temp.value} °C</p>
      <h3>Food Pairing:</h3>
      <ul>
        {beer.food_pairing.map((food) => (
          <li key={food}>{food}</li>
        ))}
      </ul>
      <p>Brewer's Tips: {beer.brewers_tips}</p>
    </div>
  );
};

export default BeerDetail;

