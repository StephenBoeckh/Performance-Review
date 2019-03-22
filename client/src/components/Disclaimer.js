import React from 'react';
import {Link} from 'react-router-dom';

export default class Disclaimer extends React.Component{
    render(){
        return (
            <div>
                <h1>How It Works</h1>
                <p>Performance Review is allows you to objectively evaluate the performance of your mutual fund by eliminating all the uneccessary noise.</p>
                <h3>Benefits:</h3>
                <ul>
                    <li>Perfect for the experienced and novice investors alike</li>
                    <li>No need for knowledge of overall market performance</li>
                    <li>Measure fund performance against the average performance of comparable funds</li>
                    <li>Comparison data is available for the past 5 calendar years to help identify patterns of above/below average performance</li>
                </ul>
                <h3>Things to Note</h3>
                <ul>
                    <li>Past performance is not a perfect indicator of future performance</li>
                    <li>Anything can happen in a given year, therefore do not read too much into a single year's calendar performance</li>
                    <li>Do not make impulsive decision based off these results. This tool is designed to aid you in having a more educating conversation about fund selection</li>
                </ul>
                <Link to="/selection">
                    <button>Select Your Fund</button>
                </Link>
            </div>
        )
    }
}