import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome to Performance Review</h1>
                <p>Performance Review is an easy to use mutual fund performance tool. Designed for the everyday investor to check the performance of their investment funds.</p>
                <Link to="/disclaimer">
                    <button>Click to Start</button>
                </Link>
            </div>
        )
    }
}