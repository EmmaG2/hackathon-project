import React from 'react'
import {Link} from 'react-router-dom'

export const GlobalNavbar = () => {
  return (
    <nav>
      <h1>
        seg<span>Dattax</span>
      </h1>
      <ul>
        <li>
          <Link to={'/app/home'}>Home</Link>
        </li>
        <li>
          <Link to={'/landing/about'}>About</Link>
        </li>
        <li>
          <Link to={'/auth/register'}>Register</Link>
        </li>
      </ul>
    </nav>
  )
}
