import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';




class Chart extends Component {


    render() {
        return <div className="chart">


            <h1> USA Market Price Data For The Last Five Days</h1>

            <LineChart width={600} height={300} data={this.props.marketPriceData.values}>
                <Line type="monotone" dataKey="y" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis />
                <YAxis />
            </LineChart>



        </div>
    }
}

export default Chart; 
