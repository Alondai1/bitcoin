import '../course.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


class Course extends Component {





  render() {
    return (
      <h1>Hey</h1>
    )
  }
}

export default connect()(Course)
