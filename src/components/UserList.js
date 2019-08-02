import React, { Component } from 'react';
// import './App.css';
import UserPreview from './UserPreview.js'

class App extends Component {



  render() {
    return <div>
      <ul className="contacts-container">
        {this.props.contacts.map((currContact) => (
          <UserPreview key={currContact._id} contact={currContact}></UserPreview>))}
      </ul>

    </div>
  }
}

export default App; 
