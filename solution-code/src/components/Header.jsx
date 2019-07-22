import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Link className="Header" to="/">
      <img src="/img/home.png" alt="Home" className="Header__home-img"/>
    </Link>
  )
}
