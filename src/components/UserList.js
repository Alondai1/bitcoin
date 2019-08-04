import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import UserPreview from './UserPreview.js'

class App extends Component {



  render() {
    return <div>
      <ul className="contacts-container">
        {this.props.contacts.map((currContact) => (
          <Link key={currContact._id} to={`/contact/${currContact._id}`}>
            <UserPreview key={currContact._id} contact={currContact}></UserPreview>
          </Link>
        ))}
      </ul>

    </div>
  }
}

export default App; 
