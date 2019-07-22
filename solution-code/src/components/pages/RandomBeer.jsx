import React, { useState, useEffect } from 'react'
import BeerDetail from '../BeerDetail'
import axios from 'axios';

export default function RandomBeer() {
  const [beer, setBeer] = useState(null)
  useEffect(() => {
    axios.get('https://ih-beer-api.herokuapp.com/beers/random')
      .then(response => {
        setBeer(response.data)
      })
  }, [])
  return (
    <div>
      <h1>Random Beer</h1>
      {!beer && <div className="text-center">Loading...</div>}
      {beer && <BeerDetail beer={beer} />}
    </div>
  )
}
