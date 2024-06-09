import React, {useState} from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom';

function navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <h1 className="navbar-logo">FSantaClara</h1>
            <ul className='nav-menu'>
              <li>
                <Link>
                <i class="fa-sharp fa-solid fa-house" style="color: #29a84f;"></i>Home</Link>
              </li>

            </ul>
        


        </div>

    </nav>
    </>
  )
}

export default navbar