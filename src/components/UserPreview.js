import React, { Component } from 'react';


class UserPreview extends Component {
  state = { }
  render() {
    return <li className="userItem ">
<span>{this.props.contact.name}</span>
<img src={`https://robohash.org/${this.props.contact.name}`} alt=""></img>
    </li>
  }
}

export default UserPreview; 
