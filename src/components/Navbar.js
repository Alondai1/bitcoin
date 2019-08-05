import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Navbar extends Component {



  render() {
    return <nav>

      <div className="nav-wrapper">
        <a href="#" className="brand-logo right">Bit</a>

        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li> <NavLink to="/">Home Page</NavLink> </li>
          <li> <NavLink to="/contact">Contacts</NavLink> </li>
          <li> <NavLink to="/stats">Stats</NavLink> </li>
        </ul>
      </div>
    </nav>

   
  }
}

export default Navbar; 
