import React, { Component } from 'react';
import UserService from '../services/UserService'
import BitcoinService from '../services/BitcoinService'

class HomePage extends Component {

    state = {
        user: { name: '' },
        BCvalue: null
    }

    async componentDidMount() {
        const user = await UserService.getUsers()
        this.setState({ user })
        const BCvalue = await BitcoinService.getRate(this.state.user.coins)
        this.setState({ BCvalue })
    }


    render() {
        return <div className="page">
            <h1>Hello {this.state.user.name}</h1>
            <p>You Have {this.state.user.coins} coins!</p>
            <p>Valued for {this.state.BCvalue} Bitcoin rate</p>
            <img src={`https://robohash.org/${this.state.user.name}`} alt=""></img>

        </div>
    }
}

export default HomePage; 