import React, { Component } from 'react';
import Chart from '../components/Chart'
import BitcoinService from '../services/BitcoinService'

class StatsPage extends Component {

    state = { marketPriceData: '' }

    async componentDidMount() {
        const marketPriceData = await BitcoinService.getMarketPrice()
        this.setState({ marketPriceData })
    }


    render() {
        return <div className="page">
            <Chart marketPriceData={this.state.marketPriceData}></Chart>
        </div>
    }
}

export default StatsPage; 
