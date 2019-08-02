import React, { Component } from 'react';
// import './App.css';

class UserPreview extends Component {

  state = { }


  render() {
    return <li className="userItem">
{this.props.contact.name}
<img src={`https://robohash.org/${this.props.contact.name}`} alt=""></img>
    </li>
  }
}

export default UserPreview; 
