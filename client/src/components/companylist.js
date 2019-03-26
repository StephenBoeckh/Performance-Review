import React from 'react';
import {Link} from 'react-router-dom';

export default class Companylist extends React.Component {
    render(){
        return(
            <ul>
                <Link to={`/fundlists/${this.props.company}`}>
                    <li><button>{this.props.company}</button></li>
                </Link>
            </ul>
        )
    }
}