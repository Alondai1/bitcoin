import React, { Component } from 'react';
import ContactService from '../services/ContactService'
import { Link } from 'react-router-dom'
import { deleteContact} from '../store/actions/contactActions';
import { connect } from 'react-redux';




class ContactDetailsPage extends Component {

    state = { contact: '' }

    async componentDidMount() {
        const contactId = this.props.match.params.id
        const contact = await ContactService.getContactById(contactId)
        this.setState({ contact })
    }

    deleteContact = () => {
        const { dispatch } = this.props
        dispatch(deleteContact(this.state.contact._id)) 
    }


    render() {
        return <div className="userDetails">
            <Link to="/contact">
                <a className="waves-effect waves-light btn">  <i className="material-icons">arrow_back
</i>
                </a>
            </Link>
            <Link to="/contact">
                <a className="waves-effect waves-light btn" onClick={this.deleteContact}>  <i className="material-icons">delete
</i>
                </a>
            </Link>
            <Link to={`/edit/${this.state.contact._id}`}>
                <a className="waves-effect waves-light btn">  <i className="material-icons">edit</i>
                </a>
            </Link>
            <h1>{this.state.contact.name}</h1>
            <h5>{this.state.contact.email}</h5>
            <h5>{this.state.contact.phone}</h5>
            <img src={`https://robohash.org/${this.state.contact.name}`} alt=""></img>

        </div>
    }
}

export default connect()(ContactDetailsPage)
