import React from 'react';
import {Link} from 'react-router-dom';

export default class Disclaimer extends React.Component{
    render(){
        return (
            <div className='disclaimer__div'>
                <h2>How It Works</h2>
                <p className='context'>Performance Review allows you to objectively evaluate mutual fund performance by focusing on the most relevant comparative data.</p>
                <h3>Benefits:</h3>
                <ul className='context'>
                    <li>Helps identify patterns of above/below-average performance</li>
                    <li>Suitable for both experienced and novice investors</li>
                    <li>Measure your fund's performance against the average performance of similar funds from a comparable universe</li>
                    <li>Measures performance over a meaningful time period, comprising the past 5 calendar years</li>
                </ul>
                <h3>Please Note:</h3>
                <ul className='context'>
                    <li>Past performance is not necessarily indicative of future performance</li>
                    <li>Professional investment managers use different approaches; their results will vary under different market conditions. For this reason, be wary of placing too much importance on variations in performance in any one calendar year. Investing is a marathon, not a sprint - that's why we compare results over a five-year period</li>
                    <li>Don't make impulsive decisions based solely on these results. This tool evaluates performance and provides the basis for meaningful discussion you can have with your financial advisor about portfolio construction</li>
                </ul>
                <Link to="/selection/company">
                    <button>Select Your Fund</button>
                </Link>
            </div>
        )
    }
}