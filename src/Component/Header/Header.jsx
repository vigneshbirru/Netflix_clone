import React from 'react'
import logo from '../../netflix.png'
import {Link } from "react-router-dom"
import { ImSearch } from "react-icons/im";
import Home from '../Home';
import Play from '../Play'

const Header = () => {
  
  return (
    <nav className="header">
         <img src={logo} alt="logo" />
        <div>
            <Link to="/tvshow">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recentlyadded">Recently Added</Link>
            <Link to="/mylist">My List</Link>
        </div>

        <ImSearch />

    </nav>
  )
}

export default Header