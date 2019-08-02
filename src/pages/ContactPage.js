import React, { Component } from 'react';
// import './App.css';
import ContactService from '../services/ContactService.js'
import UserList from '../components/UserList.js'
import ContactFilter from '../components/ContactFilter.js'

class ContactPage extends Component {

  state = { contacts: [] }

  async componentDidMount() {
    const contacts = await ContactService.getContacts()
    this.setState({ contacts })
    console.log(this.state.contacts);
  }

   setFilter = async (filterBy)=> {    
    const contacts = await ContactService.getContacts({term: filterBy})  
      
    this.setState({ contacts })
  }

  render() {
    return <div className="page">
      <ContactFilter setFilter = {this.setFilter}></ContactFilter>
      <UserList contacts={this.state.contacts}></UserList>

    </div>
  }
}

export default ContactPage; 
