import React, { Component } from 'react';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage.js'
import HomePage from './pages/HomePage.js'
import StatsPage from './pages/StatsPage.js'
import ContactDetailsPage from './pages/ContactDetailsPage.js'
import Navbar from './components/Navbar.js'

class App extends Component {


  render() {
    return <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Route exact path='/' component={HomePage} />
      <Route path='/contact' component={ContactPage} />
      <Route path='/stats' component={StatsPage} />
      </BrowserRouter>
    </div>
  }
}

export default App; 
