import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Navbar extends Component {



  render() {
    return <div>
        <ul>
            <li> <NavLink to="/">Home Page</NavLink> </li>
            <li> <NavLink to="/contact">Contacts</NavLink> </li>
            <li> <NavLink to="/stats">Stats</NavLink> </li>
        </ul>
    </div>
  }
}

export default Navbar; 
