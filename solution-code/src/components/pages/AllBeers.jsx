import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function AllBeers() {
  const [beers, setBeers] = useState(null)

  // This useEffect is executed after the 1st render, because of the 2nd parameter ([])
  useEffect(() => {
    axios.get("https://ih-beer-api.herokuapp.com/beers")
      .then(response => {
        setBeers(response.data.slice(0,50))
      })
  }, [])

  // ""
  return (
    <div>
      <h1>All Beers</h1>
      {!beers && <div className="text-center">Loading...</div>}
      {beers && <div>
        {beers.map(beer => <Link key={beer._id} className="beer-card" to={"/beers/"+beer._id}>
          <img className="beer-card__img" src={beer.image_url} />
          <div className="beer-card__text">
            <h3 className="beer-card__name">{beer.name}</h3>
            <h4 className="beer-card__tagline">{beer.tagline}</h4>
            <div className="beer-card__created-by">Created by: {beer.contributed_by}</div>
          </div>
        </Link>)}
      </div>}
    </div>
  )
}