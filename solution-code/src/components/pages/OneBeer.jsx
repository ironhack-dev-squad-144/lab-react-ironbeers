import React, { useState, useEffect } from "react";
import BeerDetail from "../BeerDetail";
import axios from 'axios'

export default function OneBeer(props) {
  const [beer, setBeer] = useState(null);
  const beerId = props.match.params.id // Because: <Route path="/beers/:id" exact component={OneBeer} />
  useEffect(() => {
    axios.get("https://ih-beer-api.herokuapp.com/beers/" + beerId)
      .then(response => {
        setBeer(response.data)
      })
  }, [])
  return (
    <div>
      {!beer && <div>Loading...</div>}
      {beer && <BeerDetail beer={beer} />}
    </div>
  );
}
