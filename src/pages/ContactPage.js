import React, { Component } from 'react';
import ContactService from '../services/ContactService.js'
import UserList from '../components/UserList.js'
import ContactFilter from '../components/ContactFilter.js'
import { Link } from 'react-router-dom'


class ContactPage extends Component {

  state = { contacts: [] }

  async componentDidMount() {
    const contacts = await ContactService.getContacts()
    this.setState({ contacts })
  }

  setFilter = async (filterBy) => {
    const contacts = await ContactService.getContacts({ term: filterBy })
    this.setState({ contacts })
  }



  render() {
    return <div className="page">
      <Link to="/edit">
        <button>Add Contact</button>
      </Link>
      <ContactFilter setFilter={this.setFilter}></ContactFilter>
      <UserList removeContact={this.removeContact} contacts={this.state.contacts}></UserList>

    </div>
  }
}

export default ContactPage; 
