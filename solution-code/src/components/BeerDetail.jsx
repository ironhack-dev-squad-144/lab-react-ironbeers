import React from "react";

export default function BeerDetail({ beer }) {
  return (
    <div className="BeerDetail">
      <img className="BeerDetail__img" src={beer.image_url} />
      <h3 className="BeerDetail__name">{beer.name}</h3>
      <h4 className="BeerDetail__tagline">{beer.tagline}</h4>
      <p className="BeerDetail__description">{beer.description}</p>
      <div className="BeerDetail__created-by">
        Created by: {beer.contributed_by}
      </div>
    </div>
  );
}

