import React from 'react'
import logo from '../assets/images/logo.png';

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
            <img src={ logo } alt="React App"></img>
        </div>
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/sample-page">Sample Page</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
