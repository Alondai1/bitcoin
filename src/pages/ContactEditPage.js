import React, { Component } from 'react';
import ContactService from '../services/ContactService'
import { editContact} from '../store/actions/contactActions';
import { connect } from 'react-redux';


class ContactEditPage extends Component {

    state = { contact: {name:'',email:'', phone: '' }}

    async componentDidMount() {
        const contactId = this.props.match.params.id
        if (!contactId) return
        const contact = await ContactService.getContactById(contactId)
        this.setState({ contact })
    }

   


    handleChange = (e) => {     
        this.setState({ contact: {...this.state.contact, [e.target.name]: e.target.value} });
      };
    
      handleSubmit = async e => {
        e.preventDefault();  
        const { dispatch } = this.props    
         await dispatch(editContact(this.state.contact)) 
         console.log('@@@@', this.props.editedUser);
         
          const {history} = this.props;          
          history.push('/contact');
      };


    render() {
        
      return <div className="contact-edit">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" onChange={this.handleChange} placeholder="Name" value={this.state.contact.name}/>
            <input type="email" name="email" onChange={this.handleChange} placeholder="Email" value={this.state.contact.email}/>
            <input type="text" name="phone" onChange={this.handleChange} placeholder="Phone Number" value={this.state.contact.phone}/>
            <button>Save</button>
          </form>
          <img src={`https://avatars.dicebear.com/v2/avataaars/${this.state.contact.name}.svg`} alt=""></img>

        </div>
    }
}


const mapStateToProps = ({contactReducer}) => {
  const { editedUser } = contactReducer;
  
  return {
    editedUser
  }
}

export default connect(mapStateToProps)(ContactEditPage)

