import React from 'react'
import HomeButton from '../HomeButton'

export default function Home() {
  return (
    <div className="Home">
      <HomeButton img="/img/beers.png" title="All Beers" to="/beers">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cupiditate doloremque, perferendis reiciendis explicabo numquam fuga omnis ipsa repudiandae nemo sit aperiam animi vero voluptates!
      </HomeButton>
      <HomeButton img="/img/random-beer.png" title="Random Beer" to="/random-beer">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cupiditate doloremque, perferendis reiciendis explicabo numquam fuga omnis ipsa repudiandae nemo sit aperiam animi vero voluptates!
      </HomeButton>
      <HomeButton img="/img/new-beer.png" title="New Beer" to="/new-beer">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cupiditate doloremque, perferendis reiciendis explicabo numquam fuga omnis ipsa repudiandae nemo sit aperiam animi vero voluptates!
      </HomeButton>
    </div>
  )
}
