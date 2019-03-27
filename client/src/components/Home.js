import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component{
    render(){
        return (
            <div className='home__div'>
                <h2>Welcome to Performance Review</h2>
                <p>Performance Review is an easy to use mutual fund performance tool. Designed for the everyday investor to check the performance of their investment funds.</p>
                <Link to="/disclaimer">
                    <button className='home__button'>Click to Start</button>
                </Link>
            </div>
        )
    }
}