import React, { Component } from 'react';
import ContactService from '../services/ContactService'
import { Link } from 'react-router-dom'


class ContactDetailsPage extends Component {

    state = { contact: '' }

    async componentDidMount() {
        const contactId = this.props.match.params.id
        const contact = await ContactService.getContactById(contactId)
        this.setState({ contact })
    }

    removeContact = async () => {
         await ContactService.deleteContact(this.state.contact._id)
    }


    render() {
        return <div className="userDetails">
            <Link to="/contact">
                <button>Back</button>
            </Link>
            <Link to="/contact">
            <button onClick={this.removeContact}>Remove</button>
            </Link>
            <Link to={`/edit/${this.state.contact._id}`}>
            <button>Edit</button>
            </Link>
            <h1>{this.state.contact.name}</h1>
            <h5>{this.state.contact.email}</h5>
            <h5>{this.state.contact.phone}</h5>
            <img src={`https://robohash.org/${this.state.contact.name}`} alt=""></img>

        </div>
    }
}

export default ContactDetailsPage; 
