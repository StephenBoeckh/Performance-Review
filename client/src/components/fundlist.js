import React from 'react';
import {Link} from 'react-router-dom';

export default class Funds extends React.Component{
    const 
    render(){
        return(
            <ul>
                <Link to={`/individual/${this.props.id}`}>
                    <li><button>{this.props.companyfunds}</button></li>
                </Link>
            </ul>
        )
    }
}