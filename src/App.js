import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage.js'
import HomePage from './pages/HomePage.js'
import StatsPage from './pages/StatsPage.js'
import ContactDetailsPage from './pages/ContactDetailsPage.js'
import ContactEditPage from './pages/ContactEditPage.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

class App extends Component {

  onClose() {
    console.log('as');
  }

  render() {
    return <div>
      <Router>
        <Navbar></Navbar>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route path='/stats' component={StatsPage} />
        <Route
          path="/contact/:id"
          render={props => {
            return <ContactDetailsPage {...props} onClose={this.goBack} />;
          }}
        />
        <Route
          path="/edit/:id?"
          render={props => {
            return <ContactEditPage {...props} onClose={this.goBack} />;
          }}
        />
      </Router>
      <Footer></Footer>
    </div>
  }
}

export default App; 
