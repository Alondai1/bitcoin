import React, { Component } from 'react';
import ContactService from '../services/ContactService.js'
import UserList from '../components/UserList.js'
import ContactFilter from '../components/ContactFilter.js'
import { Link } from 'react-router-dom'
import { getContacts } from '../store/actions/contactActions';
import { connect } from 'react-redux';


class ContactPage extends Component {


  async componentDidMount() {
    
    const { dispatch } = this.props
    dispatch(getContacts()) 
    // this.setState({ robots, selectedRobot: robots[0] })
  }

  setFilter = async (filterBy) => {
    const { dispatch } = this.props
    dispatch(getContacts({ term: filterBy })) 
    
  }



  render() {
    return <div className="page">


      <Link to="/edit">
        <a className="waves-effect waves-light btn" onClick={this.removeContact}>  <i className="material-icons">add
</i>
        </a>
      </Link>
      <ContactFilter setFilter={this.setFilter}></ContactFilter>
      <UserList removeContact={this.removeContact} ></UserList>

    </div>
  }
}

export default connect()(ContactPage)
