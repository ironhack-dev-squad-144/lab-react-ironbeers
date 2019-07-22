import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeButton({ img, title, to, children }) {
  return (
    <Link className="HomeButton" to={to}>
      <img src={img} alt="" className="HomeButton__img" />
      <div className="HomeButton__text">
        <h2 className="HomeButton__title">{title}</h2>
        <p className="HomeButton__children">{children}</p>
      </div>
    </Link>
  )
}
