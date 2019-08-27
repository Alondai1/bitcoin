import React, { Component } from 'react';
import UserService from '../services/UserService'
import BitcoinService from '../services/BitcoinService'

class HomePage extends Component {

    state = {
        user: { name: '', coins:0},
        BCvalue: null
    }

    async componentDidMount() {
        const user = await UserService.getUsers()
        this.setState({ user })
        const BCvalue = await BitcoinService.getRate(this.state.user.coins)
        this.setState({BCvalue })
      
    }


    render() {
        return <div className="home page">
            <h1>Hello {this.state.user.name}</h1>
            <p>You Have {this.state.user.coins} coins!</p>
            <p>Valued for {this.state.BCvalue} Bitcoin rate</p>
            <img className="avatar" src={`https://avatars.dicebear.com/v2/avataaars/${this.state.user.name}.svg`} alt=""></img>

        </div>
    }
}

export default HomePage; 