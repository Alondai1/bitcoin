import React, { Component } from 'react';
// import './App.css';

class ContactFilter extends Component {

  handleInput=(ev)=>{
    this.props.setFilter(ev.target.value)
}

  render() {
    return <div>
      <input type="text" placeholder="Search Contacts" onChange={this.handleInput}></input>
    </div>
  }
}

export default ContactFilter; 
