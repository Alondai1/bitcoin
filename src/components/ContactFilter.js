import React, { Component } from 'react';
// import './App.css';

class ContactFilter extends Component {

  handleInput=(ev)=>{
    this.props.setFilter(ev.target.value)
}

  render() {
    return  <div className="input-field col s6">
    <i className="material-icons prefix">account_circle</i>
    <input id="icon_prefix" className="validate" type="text" placeholder="Search Contacts" onChange={this.handleInput}></input>
    </div>
  }
}

export default ContactFilter; 

