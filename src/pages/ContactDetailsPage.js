import React, { Component } from 'react';
import ContactService from '../services/ContactService'

class ContactDetailsPage extends Component {

    state = { contact: '' }

    async componentDidMount() {
        const contact = await ContactService.getContacts({ term: 'pamela nolan' })
        this.setState({ contact: contact[0] })
        console.log(this.state.contact);

    }

    render() {
        return <div className="userDetails">

            <h1>{this.state.contact.name}</h1>
            <h5>{this.state.contact.email}</h5>
            <h5>{this.state.contact.phone}</h5>
            <img src={`https://robohash.org/${this.state.contact.name}`} alt=""></img>

        </div>
    }
}

export default ContactDetailsPage; 
