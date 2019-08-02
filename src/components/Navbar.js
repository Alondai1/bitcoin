import React, { Component } from 'react';

class Navbar extends Component {



  render() {
    return <div>
        <ul>
            <li> <a href="/">Home Page</a></li>
            <li> <a href="/contact">Contacts</a></li>
            <li> <a href="/stats">Stats</a></li>
        </ul>
    </div>
  }
}

export default Navbar; 
