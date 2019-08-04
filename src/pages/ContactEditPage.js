import React, { Component } from 'react';
import ContactService from '../services/ContactService'


class ContactDetailsPage extends Component {

    state = { contact: {name:'',email:'', phone: '' }}

    async componentDidMount() {
        const contactId = this.props.match.params.id
        if (!contactId) return
        const contact = await ContactService.getContactById(contactId)
        this.setState({ contact })
    }

    removeContact = async () => {
         await ContactService.deleteContact(this.state.contact._id)
    }


    handleChange = (e) => {     
        this.setState({ contact: {...this.state.contact, [e.target.name]: e.target.value} });
      };
    
      handleSubmit = async e => {
          e.preventDefault();      
          await ContactService.saveContact(this.state.contact);
          const {history} = this.props;
          history.push('/contact');
      };


    render() {
        const {contact} = this.state;
      return <div className="contact-edit">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.contact.name}/>
            <input type="email" name="email" onChange={this.handleChange} value={this.state.contact.email}/>
            <input type="text" name="phone" onChange={this.handleChange} value={this.state.contact.phone}/>
            <button>Save</button>
          </form>
        </div>
    
      
    }
}

export default ContactDetailsPage; 
