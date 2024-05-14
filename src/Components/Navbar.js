import "./NavbarStyle.css";
import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import {Link} from 'react-router-dom';

function Navbar() {

  const [state,setState] = useState(false);

  const handleClick = () =>
  {
    setState(!state); 
  }
  return (
    
    <nav className="NavbarItems">
        
    <h1 className="navbar-logo"> NewMove </h1>

    <div className="menu-icons" onClick={handleClick}>
     <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
    </div>

    <ul className={state ? "nav-menu active": "nav-menu"}>
    {MenuItems.map((item,index) =>
        <li key = {index}>
            <Link className={item.cName} to={item.url}>
            <i class= {item.icon}></i>
            {item.title}
            </Link>
        </li>)}
        <Link to = {"/Sign up"}><button>Sign up</button>
        </Link>
    </ul>
    </nav>

  );
}

export default Navbar